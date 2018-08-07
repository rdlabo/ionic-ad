import {Command, flags} from '@oclif/command'

export default class Set extends Command {
  static description = 'auto set config. input arg `lint` or `prettier` or `alias` or `all`. ' +
    'ex) ionic-sub set lint'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{
    name: 'package',
    description: 'input `lint` or `prettier`',
    required: true
  }]
  public type: string = ''

  async run() {
    const {args} = this.parse(Set)
    const {Helper} = await import('../libraries/helper')
    this.type = await new Helper().getIonicType().catch(error => {
      this.error(error)
      this.exit(200)
      return error
    })
    if (this.type !== 'ionic-angular' && this.type !== 'angular') {
      this.error('Sorry! ionic-sub CLI can only be run in ionic-angular or angular only')
    }

    switch (args.package) {
      case 'lint':
        this.lint().catch()
        break
      case 'prettier':
        this.prettier().catch()
        break
      case 'alias':
        this.alias().catch()
        break
      case 'all':
        this.lint().catch()
        this.prettier().catch()
        this.alias().catch()
        break
      default:
        this.error(args.package + ' args is not fount.')
    }
  }
  async lint() {
    const {Lint} = await import('../libraries/set/lint')
    const lint = new Lint(this.type)
    this.log(await lint.installPackage().catch(error => error))
    this.log(await lint.addLint().catch(error => error))
  }
  async prettier() {
    const {Prettier} = await import('../libraries/set/prettier')
    const prettier = new Prettier(this.type)
    this.log(await prettier.installPackage().catch(error => error))
    this.log(await prettier.addPrettierConfig().catch(error => error))
    this.log(await prettier.rewritePackageJson().catch(error => error))
  }
  async alias() {
    const {Alias} = await import('../libraries/set/alias')
    const alias = new Alias(this.type)
    this.log(await alias.addWebpack().catch(error => error))
    this.log(await alias.rewritePackageJson().catch(error => error))
    this.log(await alias.rewriteTsconfigJson().catch(error => error))
    this.log(await alias.addEnvironmentFile().catch(error => error))
  }
}
