const AV = require('../libs/av-core-min');
class Identity extends AV.Object{
  get myidentity(){return this.get('myidentity')}
  set myidentity(value){return this.set('myidentity',value)}

  get babyidentity(){return this.get('babyidentity')}
  set babyidentity(value){return this.set('babyidentity',value)}

  get babybirth(){return this.get('babybirth')}
  set babybirth(value){return this.set('babybirth',value)}

  get babyweek(){return this.get('babyweek')}
  set babyweek(value){return this.set('babyweek',value)}
}

AV.Object.register(Identity);
module.exports=Identity