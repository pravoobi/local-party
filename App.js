import React, { Component } from 'react';
import { StyleSheet, Text, View ,AsyncStorage, NetInfo} from 'react-native';
import OTPForm from './src/components/OTPForm';
import OTPSubmit from './src/components/OTPSubmit';
import Registration from './src/components/Registration';
import Home from './src/components/Home';
import Pass from './src/components/Pass';
import Code from './src/components/Code';
import ProfileView from './src/components/ProfileView';
import Cameras from './src/components/Camera';
import LocationId from './src/components/LocationId';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import branch from 'react-native-branch';

//const fetchurl = "https://goloco.in/api/events";
const fetchurl = "http://192.168.1.6:3000";
export default class App extends Component<{}> {
  constructor(props){
    super(props);

      this.con = this.con.bind(this);
      this.getLocations = this.getLocations.bind(this);
      this.onEventSelect = this.onEventSelect.bind(this);
      this.setUserChoice = this.setUserChoice.bind(this);
      this.getQsn1 = this.getQsn1.bind(this);
      this.getQsn2 = this.getQsn2.bind(this);
      this.getbranch = this.getbranch.bind(this);
      this.getImage = this.getImage.bind(this);
      this.getEventScreen = this.getEventScreen.bind(this);
      this.getProfileScreen = this.getProfileScreen.bind(this);
      this.getPassScreen = this.getPassScreen.bind(this);
      this.backToEvents = this.backToEvents.bind(this);
      this.goEvent = this.goEvent.bind(this);
      this.iconPress = this.iconPress.bind(this);
      // this.vetLogin = this.vetLogin.bind(this);
      // this.connectivityChange = this.connectivityChange.bind(this);

    this.state = {
      mobile:'',
      otp: '',
      locations: [],
      events: [],
      contests:[],
      profile:{avatarSource: {}, qsn1:'',qsn2:'',name: ''},
      seekers:[],
      passbook:[],
      tabcode: '',
      userid: '',
      paramUserid: '',
      loginstyl: {bcolor:'aliceblue', errtext:''},
      connectionType: null,
      otpMsg: '',
      loginEmail: '',
      eventidselcted: '',
      eventselcted: null,
      screenid: 'registrationScreen',
      userChoice: [],
      eventidselcted: '',
      eventselcted: null,
      screenid: 'registrationScreen',
      userChoice: [],
      netErrorMsg: '',
      eventGoing:[{}]
    }

    this.items = [{id:"koramangala social",  name:" koramangala social"},
      {id:"Myu bar at Gilly's",  name:" Myu bar at Gilly's"},
      {id:"Fenny's lounge and kitchen",  name:" Fenny's lounge and kitchen"},
      {id:"happy brew",  name:" happy brew"},
      {id:"1522",  name:"1522"},
      {id:"sotally tober",  name:" sotally tober"},
      {id:"sherlock's",  name:" sherlock's"},
      {id:"Toit",  name:" Toit"},
      {id:"black rabbit",  name:" black rabbit"},
      {id:"hangover",  name:" hangover"},
      {id:"loft 38",  name:" loft 38"},
      {id:"vapour",  name:" vapour"},
      {id:"Glocal",  name:" Glocal"},
      {id:"612 east",  name:" 612 east"},
      {id:"sly granny",  name:" sly granny"},
      {id:"sanchez",  name:" sanchez"},
      {id:"shiro",  name:" shiro"},
      {id:"farzi cafe",  name:" farzi cafe"},
      {id:"skyee bar",  name:" skyee bar"},
      {id:"the tao terraces",  name:" the tao terraces"},
      {id:"churchstreet social",  name:" churchstreet social"},
      {id:"ice bar",  name:" ice bar"},
      {id:" i bar",  name:"  i bar"},
      {id:"the 13 th floor",  name:" the 13 th floor"},
      {id:"bootlegger",  name:" bootlegger"},
      {id:"community",  name:" community"},
      {id:"sanctum",  name:" sanctum"}
      ];
  }

  componentDidMount(){
    this.getbranch();
    this.loadAstorage();
    this.getLocations();

  }

  loadAstorage = function(){
    AsyncStorage.getItem('goloco_saved_items').then(asval => {
    console.log("async",asval);
    if(asval !== null){
      asval1 = JSON.parse(asval);
      this.setState({profile: asval1});
      console.log("saved items are there---------------", asval1.qsn1);
    }
    });
  }
  

 // Login data is sent as post using fetch
  postLogin(data){
    fetch(`${fetchurl}/mobile`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({mobile:data}),
  })
  .then((response) => {
    console.log("plogin",response, response.status);
    var {userid} = this.state;
    if(response.status == 200){
        var rb =response._bodyInit;
        var rbj = JSON.parse(rb);
        userid = rbj.userId;
        this.setState({userid});
        const goloitems = {mobile: this.state.mobile, userid: this.state.userid}
        AsyncStorage.removeItem('saveditems');
        AsyncStorage.setItem('saveditems', JSON.stringify(homiitems));
        const asitems = AsyncStorage.getItem('saveditems');
        console.log("asitems", asitems);
        Actions.otpsubmit();

    }
    else if( response.status == 401){
      console.log("login 401")
      var otpMsg = this.state.otpMsg;
      otpMsg = "Login Failed!. Please check your Mail and Password";
      this.setState({otpMsg});
    }
    else if(response.status == 404 && this.state.connectionType == 'wifi'){
      console.log("login404");
      this.setState({otpMsg: "Not network"});
    }
  })
  .catch((error) => {
    console.error(error);
      })
  .done();
  }
  con(){
    console.log("main function")
  }

  getLocations(){
    return fetch(`${fetchurl}/events`)
      .then((response) => response.json())
      .then((responseJson) => {
       var events = responseJson;
        this.setState({events});
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      })
      .done();
  }

   


  geteventById(eid){
    return fetch(`${fetchurl}/events/${eid}`)
      .then((response) => response.json())
      .then((responseJson) => {
       var eventselcted = responseJson;
        this.setState({eventselcted, screenid: 'eventid'});
        console.log("eventselected", responseJson);
      })
      .catch((error) => {
        console.error(error);
      })
      .done();
  }

  onEventSelect(eid){
    const events = this.state.events;
    events.map(item =>  {if(item.id == eid){ 
      var eventselected = {...this.state.eventselected};
       eventselected =  item;
      this.setState({eventidselected: eid, eventselected, screenid: 'eventid'});
      console.log("oneventsel", eventselected);

    }}
      );
  }

  getPassScreen(){
    this.setState({screenid:'passScreen'});
  }

    getEventScreen(){
    this.getAsync();
    this.setState({screenid: 'events'});
    }

      getProfileScreen(){
      this.setState({screenid: 'profileScreen'});
    }

    backToEvents(){
      this.setState({screenid: 'events'});
    }

  setUserChoice(itemValue){
    this.setState({userChoice: itemValue});
    console.log(this.state.userChoice);
  }

  backToEvents(){
    this.setState({screenid: 'events'})
  }

  goEvent(gevent){
    this.setState({eventGoing: gevent});
    console.log("egoing",this.state.eventGoing);
  }

  iconPress(scrid){
    this.setState({screenid: scrid});
    console.log("iconpress", scrid);
  }



 async getbranch(){
    branch.subscribe(({ error, params }) => {
  if (error) {
    console.error('Error from Branch: ' + error)
    return
  }

  if(params){
      console.log("params", params) 
    }

      this.setState({paramUserid: params.registered_user_id})
   
    

  // params will never be null if error is null
  })
    
  let lastParams = await branch.getLatestReferringParams() // params from last open
  let installParams = await branch.getFirstReferringParams()

  }



  getAsync(){
    const regItems = this.state.profile;

    AsyncStorage.setItem('goloco_saved_items', JSON.stringify(regItems), () => {
    AsyncStorage.getItem('goloco_saved_items', (err, result) => {
      console.log("result ===== ",result);
    });
});

  }



 //get signup mobile number from mobile OTP request screen
  getMobile(mo){
    var mobile = this.state.mobile;
    mobile = mo;
    this.setState({mobile});
  }
  //get otp number from mobile OTP submit screen
  getOTP(ot){
    var otp = this.state.otp;
    otp = ot;
    this.setState({otp});
  }

   getImage(source){
    var profile={...this.state.profile};
    profile.avatarSource=source;
    this.setState({profile});
    this.getAsync();
  }

  getQsn1(reg){
    var profile = {...this.state.profile};
    profile.qsn1 = reg;
    this.setState({profile});
    this.getAsync();
  }

  getQsn2(reg){
    var profile = {...this.state.profile};
    profile.qsn2 = reg;
    this.setState({profile});
    this.getAsync();
  }

  //   vetLogin(){
  //   var {profile.qs1,profile.qsn2} = this.state;
  //   var reg = /^([A-Za-z0-9_\-\.])$/;
  //   if(profile.qsn1 == null){
  //     loginstyl.errtext = "Please fill the data";
  //     loginstyl.bcolor = 'red';
  //     this.setState({ loginstyl });
  //     return "Please fill the data";
  //   }
  //   else if(profile.qsn2 == null){
  //     loginstyl.errtext = "Please fill the data";
  //     loginstyl.bcolor = 'red';
  //     this.setState({ loginstyl });
  //     return "Please fill the data";
  //   }
  //   else if( this.state.connectionType == 'none'){
  //     return "Please check your internet connectivity";
  //   }
  //   }

  //   internetConnected(){
  //   NetInfo.isConnected.fetch().then(isConnected => {
  //     console.log("internetConnected", isConnected);
  //     return isConnected;
  //   });
  // }
  // //Event listener handler for network change
  // connectivityChange(connectionInfo) {
  //   console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
  //   NetInfo.removeEventListener('connectionChange', connectivityChange);
    
  // }
  // //

  // //Listeners removed for unmounted components.
  // componentWillUnmount() {
  //   AppState.removeEventListener('change', this._handleAppStateChange);
  //   NetInfo.removeEventListener('connectionChange', this.connectivityChange);

  // }

  //   netconnected(){
  //   NetInfo.getConnectionInfo().then((connectionInfo) => {
  //     console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
  //     var connectionType = this.state.connectionType;
  //     connectionType = connectionInfo.type;
  //     var fetchurl = this.state.fetchurl;
  //     if(connectionType == 'wifi'){
  //       var fetchurl = "http://192.168.0.26";
  //     }
  //     else{
  //       var fetchurl = "http://ec2-34-208-123-255.us-west-2.compute.amazonaws.com:3300/api"
  //     }
  //     this.setState({connectionType, fetchurl});
  //     console.log("neturl",this.state.connectionType,this.state.fetchurl)

  //   NetInfo.addEventListener('connectionChange', this.connectivityChange);
  //   });
    
  // }
  // connectivityChange(connectionInfo) {
  //   //console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
  //   var connectionType = this.state.connectionType;
  //   connectionType = connectionInfo.type;
  //   var fetchurl = this.state.fetchurl;
  //     if(connectionType == 'wifi'){
  //       var fetchurl = "http://192.168.0.26";
  //     }
  //     else{
  //       var fetchurl = "http://ec2-34-208-123-255.us-west-2.compute.amazonaws.com:3300/api"
  //     }
  //     this.setState({connectionType, fetchurl});
  // }
 


  render() {
    switch(this.state.screenid){
      case 'events': 
    return (
      <Home events={this.state.events} onEventSelect={this.onEventSelect} 
      getProfileScreen = {this.getProfileScreen} userChoice={this.state.userChoice} 
      setUserChoice={this.setUserChoice} items={this.items} getPassScreen = {this.getPassScreen}
      netErrorMsg={this.state.netErrorMsg} iconPress={this.iconPress} />
    );
      case 'eventid':
    return (
      <LocationId  goEvent={this.goEvent} backToEvents ={this.backToEvents} eventselected={this.state.eventselected}  />
    );
      case 'registrationScreen':
    return (
        <Registration vlogin = {this.vetLogin} getEventScreen = {this.getEventScreen} 
        getImage = {this.getImage} qsn1fn = {this.getQsn1} qsn2fn = {this.getQsn2} state = {this.state}  />
    );
      case 'profileScreen':
    return (
        <ProfileView  profileData = {this.state.profile} iconPress={this.iconPress} getPassScreen = {this.getPassScreen} 
        getProfileScreen = {this.getProfileScreen} backToEvents ={this.backToEvents}/>
    );
      case 'passScreen':
    return (
        <Pass eventGoing={this.state.eventGoing} getPassScreen = {this.getPassScreen} 
        getProfileScreen = {this.getProfileScreen}/>
    );
  }
  }
}


