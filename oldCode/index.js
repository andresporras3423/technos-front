//MODELS
class loginModel{
    constructor(user_id, mail, pass){
        this.user_id=user_id;
        this.mail=mail;
        this.pass=pass;
    }
}

class wordModel{
    constructor(techno_id, user_id, word, translation, technology, word_id){
        this.techno_id=techno_id;
        this.user_id = user_id;
        this.word=word;
        this.translation=translation;
        this.technology=technology;
        this.word_id=word_id;
    }
}

class technoModel{
    constructor(technology, user_id, techno_id, active){
        this.technology=technology;
        this.user_id = user_id;
        this.techno_id = techno_id;
        this.active = active;
    }
}

class testModel{
    constructor(date, correct, total){
        this.date_test=date;
        this.correct_questions=correct;
        this.total_questions=total;
    }
}

class questionModel{
    constructor(word, technology, sol, opt2, opt3, opt4){
        this.word=word;
        this.technology=technology;
        this.sol=sol;
        this.opts=[sol, opt2, opt3, opt4];
        this.opts.sort();
    }
}

//GLOBAL

var globalData = 
{
    userId:"",
    activeColor: function(correct, questions){
                if(correct/questions<=0.8){
                    var red=Math.round((correct/questions)*255/0.8);
                    return 'rgb(255,'+red+',0)';
                }
                else{
                    var green=255-Math.round(((correct/questions)-0.8)*255/0.2);
                    return 'rgb('+green+',255,0)';
                }
            }
};

//DATA
class loginData{
    constructor(){
        this.doLogin =  function(lm){
            return new Promise(resolve => {
                 var obj = {mail:lm.mail, pass:lm.pass};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "doLogin", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                
            
                 });
            
        };
    }
}

class wordData{
    constructor(){
        this.createWord =  function(wm){
            return new Promise(resolve => {
                 var obj = {user_id:wm.user_id, techno_id: wm.techno_id, word:wm.word, translation: wm.translation};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "createWord", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                
            
                 });
            
        };
        
        this.updateWord =  function(wm){
            return new Promise(resolve => {
                 var obj = {user_id:wm.user_id, techno_id: wm.techno_id, word:wm.word, translation: wm.translation, word_id: wm.word_id};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "updateWord", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                
            
                 });
            
        };
        
        this.getWords =  function(wm, ch){
            return new Promise(resolve => {
                 var obj = {user_id:wm.user_id, checked: ch};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "getWords", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                
            
                 });
            
        };
        
        this.searchWords =  function(user_id, techno_id, word, translation, tSearch){
            return new Promise(resolve => {
                 var obj = {user_id:user_id, techno_id: techno_id, word: word, translation: translation, tSearch: tSearch};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "searchWords", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                
            
                 });
            
        };
        
        this.deleteWord =  function(wm){
            return new Promise(resolve => {
                 var obj = {user_id:wm.user_id, word_id: wm.word_id};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "deleteWord", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                
            
                 });
            
        };
    }
}

class technoData{
    constructor(){
        this.createTechno =  function(tm){
            return new Promise(resolve => {
                 var obj = {user_id:tm.user_id, technology: tm.technology, active: tm.active};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "createTechno", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                 });
        };
        
        this.updateTechno =  function(tm){
            return new Promise(resolve => {
                 var obj = {user_id:tm.user_id, techno_id:tm.techno_id, technology: tm.technology, active: tm.active};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "updateTechno", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                 });
            
        };
        
        this.getTechnos =  function(tm, ch){
            return new Promise(resolve => {
                 var obj = {user_id:tm.user_id, checked: ch};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "getTechnos", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                
            
                 });
            
        };
        
        this.searchTechnos =  function(user_id, technology, tSearch, active){
            return new Promise(resolve => {
                 var obj = {user_id:user_id, technology: technology, active:active, tSearch: tSearch};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "searchTechnos", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                 });
            
        };
        
        this.deleteTechno =  function(tm){
            return new Promise(resolve => {
                 var obj = {user_id:tm.user_id, techno_id: tm.techno_id};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "deleteTechno", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                 });
        };
    }
}

class questionData{
    constructor(){
        this.nextWord =  function(user_id, techno_id){
            return new Promise(resolve => {
                 var obj = {user_id:user_id, techno_id: techno_id};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "nextWord", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                
            
                 });
            
        };
        
        this.saveTest =  function(user_id, correct, total){
            return new Promise(resolve => {
                 var obj = {user_id:user_id, correct: correct, total:total};
            $.ajax({
                crossDomain: true,
                url:"index.php", 
                type: "post", 
               data: {postmethod: "saveTest", postparams: JSON.stringify(obj)},
                success:function(result){
                resolve(result);
               }
             });
                
            
                 });
            
        };
    }
}

//CONTROLLERS
class loginController{
    constructor(){
        this.lm = new loginModel("","","");
        this.ld = new loginData();
        this.doLogin =  async function(mail, pass){
             //return new Promise(resolve => {
                 this.lm.mail=mail;
            this.lm.pass=pass;
            return await this.ld.doLogin(this.lm);
            //return result;
           // resolve(result);
            //     });
            
        }
    }
}

class wordController{
    constructor(){
        this.wm = new wordModel("","","","","", -1);
        this.wd = new wordData();
        this.createWord =  async function(user_id, techno_id, word, translation){
             //return new Promise(resolve => {
                 this.wm.user_id=user_id;
                 this.wm.techno_id=techno_id;
            this.wm.word=word;
            this.wm.translation=translation;
            return await this.wd.createWord(this.wm);
            //return result;
           // resolve(result);
            //     });
            
        };
        
        this.updateWord =  async function(user_id, techno_id, word, translation, word_id){
             //return new Promise(resolve => {
                 this.wm.user_id=user_id;
                 this.wm.techno_id=techno_id;
            this.wm.word=word;
            this.wm.translation=translation;
            this.wm.word_id=word_id;
            return await this.wd.updateWord(this.wm);
            //return result;
           // resolve(result);
            //     });
            
        };
        
        this.getWords =  async function(user_id, checked){
             //return new Promise(resolve => {
                 this.wm.user_id=user_id;
            var result= await this.wd.getWords(this.wm, checked);
            var completeList = JSON.parse(result); 
            var list=[];
                var lists=[];
                for(var i=0;i<completeList.length;i++){
                    list.push(completeList[i]);
                    if(list.length==10 || i==(completeList.length-1)){
                        lists.push(list);
                        list=[];
                    }
                }
                return {list: lists, size: completeList.length};
            //return result;
           // resolve(result);
            //     });
            
        };
        
        this.searchWords =  async function(user_id, technology, word, translation, tSearch){
             //return new Promise(resolve => {
            var result= await this.wd.searchWords(user_id, technology, word, translation, tSearch);
            var completeList = JSON.parse(result); 
            var list=[];
                var lists=[];
                for(var i=0;i<completeList.length;i++){
                    list.push(completeList[i]);
                    if(list.length==10 || i==(completeList.length-1)){
                        lists.push(list);
                        list=[];
                    }
                }
                return {list: lists, size: completeList.length};
            //return result;
           // resolve(result);
            //     });
            
        };
        
        this.deleteWord =  async function(user_id, word_id){
            this.wm.user_id=user_id;
            this.wm.word_id=word_id;
            return await this.wd.deleteWord(this.wm);
        };
    }
}

class technoController{
    constructor(){
        this.tm = new technoModel("","","","");
        this.td = new technoData();
        this.createTechno =  async function(user_id, technology, active){
             //return new Promise(resolve => {
                 this.tm.user_id=user_id;
                 this.tm.technology=technology;
                 this.tm.active=active;
            return await this.td.createTechno(this.tm);
            //return result;
           // resolve(result);
            //     });
            
        };
        
        this.updateTechno =  async function(user_id,techno_id, technology, active){
             //return new Promise(resolve => {
                 this.tm.user_id=user_id;
                 this.tm.techno_id=techno_id;
                 this.tm.technology=technology;
                 this.tm.active=active;
            return await this.td.updateTechno(this.tm);
            //return result;
           // resolve(result);
            //     });
            
        };
        
        this.getTechnos =  async function(user_id, checked){
             //return new Promise(resolve => {
                 this.tm.user_id=user_id;
            var result= await this.td.getTechnos(this.tm, checked);
            var completeList = JSON.parse(result); 
            var list=[];
            var lists=[];
            for(var i=0;i<completeList.length;i++){
                list.push(completeList[i]);
                if(i==(completeList.length-1)){
                    lists.push(list);
                    list=[];
                }
            }
            return {list: lists, size: completeList.length};
            //return result;
           // resolve(result);
            //     });
            
        };
        
        this.searchTechnos =  async function(user_id, technology, tSearch, active){
             //return new Promise(resolve => {
            var result= await this.td.searchTechnos(user_id, technology, tSearch, active);
            var completeList = JSON.parse(result); 
            // var list=[];
            //     var lists=[];
            //     for(var i=0;i<completeList.length;i++){
            //         list.push(completeList[i]);
            //         if(list.length==10 || i==(completeList.length-1)){
            //             lists.push(list);
            //             list=[];
            //         }
            //     }
                return {list: completeList, size: completeList.length};
            //return result;
           // resolve(result);
            //     });
            
        };
        
        this.deleteTechno =  async function(user_id, techno_id){
            this.tm.user_id=user_id;
            this.tm.techno_id=techno_id;
            return await this.td.deleteTechno(this.tm);
        };
    }
}

class testController{
    constructor(){
        //this.qm = new questionModel("","","");
        this.qd = new questionData();
        this.nextWord =  async function(ml, techno_id){
             //return new Promise(resolve => {
                 
            var result =  await this.qd.nextWord(ml, techno_id);
            var questionData = JSON.parse(result);
            var qm = new questionModel(questionData[0].word, questionData[0].technology,questionData[0].translation,questionData[1].translation,questionData[2].translation,questionData[3].translation);
            return qm;
            //return result;
           // resolve(result);
            //     });
            
        };
        this.saveTest =  async function(userId, correct, total){
             //return new Promise(resolve => {
            var result = await this.qd.saveTest(userId, correct, total);
            return result;
            //return result;
           // resolve(result);
            //     });
            
        };
    }
}

//VIEWS

var loginView = Vue.component('login-component',(
    {
        name:'login-component',
        created: function(){
            this.currentView=true;
            
            
        },
        watch:{
            currentView(){
                if(this.currentView){
                    this.lController = new loginController();
                }
            }
        },
        data:function(){
            return {
                mail:"",
            pass:"",
            currentView:null,
            lController:null,
            message: "",
            visibleMessage:false,
            colorClass:["redClass","yellowClass","greenClass"],
            colorOpt:0
            }
        },
        methods:{
            login: async function(){
               var result = await this.lController.doLogin(this.mail,this.pass);
                if(result!="0"){
                    globalData.userId=JSON.parse(result)[0].user_id;
                    this.$eventBus.$emit('loginFalse', false);
                }
                else{
                    this.message="invalid login";
                    this.visibleMessage=true;
                    this.colorOpt=0;
                }
                
                console.log("click in login");
            }
        }
    }
));
//
//
//
var navBarView = Vue.component('navbar-component',(
    {
        name:'barnav-component',
        created: async function(){
            this.currentView=true;
        },
        watch:{
            currentView(){
                
            }
        },
        data:function(){
            return {
                currentView:null,
                gFactory:null,
                currentTab:0,
                linkBackColor:'linkBackColor',
                vController: null
            }
        },
        methods:{
            exit:function(){
                this.$eventBus.$emit('loginFalse', true);
            },
            newTab:function(n){
                this.currentTab=n;
            },
            isAdmin:function(){
                if(globalData.userId=="1"){
                    return true;
                }
                return false;
            }
        }
    }
));
//
//
//
var dictionaryView = Vue.component('dictionary-component',(
    {
        name:'dictionary-component',
        created: async function(){
            this.wController = new wordController();
            this.tController = new technoController();
            await this.getData();
            this.$refs.word.focus();
        },
        watch:{
        },
        data:function(){
            return{
            listWords:[],
            completeList:[],
            listTechnos:[],
            translation:"",
            techno_id:-1,
            word: "",
            disabled: false,
            editing: -1,
            currentView:null,
            wController: null,
            tController: null,
            currentItem:0,
            size:0,
            messageData:"",
            colorClass:["redBackColor","yellowBackColor","greenBackColor", ""],
            colorOpt:3,
            checked:0,
            tSearch:0,
            id:-1
            }
            
        },
        methods:{
            createWord: async function(){
                if( this.word==0 || this.translation==0 || this.techno_id==0){
                    this.messageData="please, complete all the form";
                        this.colorOpt=1;
                }
                else if(this.editing==-1){
                    var result = await this.wController.createWord(globalData.userId, this.techno_id, this.word,this.translation);
                    if(result=="1"){
                        this.messageData="word successfully saved";
                        this.colorOpt=2;
                    }
                    else if(result==""){
                        this.messageData="word had been already saved";
                        this.colorOpt=1;
                    }
                    else{
                        this.messageData="a problem happened";
                        this.colorOpt=0;
                    }
                    await this.getData();
                }
                else{
                    var result = await this.wController.updateWord(globalData.userId, this.techno_id, this.word,this.translation, this.word_id);
                    if(result=="1"){
                        this.messageData="word successfully updated";
                        this.colorOpt=2;
                    }
                    else{
                        this.messageData="a problem happened";
                        this.colorOpt=0;
                    }
                    await this.getData();
                }
                this.clearData();
                this.$refs.word.focus();
            },
            readWord: function(index){
                this.completeForm(this.listWords[this.currentItem][index].techno_id, this.listWords[this.currentItem][index].word, this.listWords[this.currentItem][index].translation, -1);
                this.disabled=true;
            },
            updateWord: function(index){
                this.completeForm(this.listWords[this.currentItem][index].techno_id, this.listWords[this.currentItem][index].word, this.listWords[this.currentItem][index].translation, this.listWords[this.currentItem][index].word_id);
                this.editing=index;
            },
            deleteWord: async function(index){
                var r = confirm("do you really want to delete this word?");
                if (r == true) {
                    var result = await this.wController.deleteWord(globalData.userId, this.listWords[this.currentItem][index].word_id);
                if(result=="1"){
                        this.messageData="word successfully deleted";
                        this.colorOpt=2;
                    }
                    else{
                        this.messageData="a problem happened";
                        this.colorOpt=0;
                    }
                await this.getData();
                this.clearData();
                }
                
            },
            completeForm: function(nTechno_id, nWord, nTranslation, nWord_id){
                this.techno_id=nTechno_id;
                this.word=nWord;
                this.translation=nTranslation;
                this.word_id=nWord_id;
                this.disabled=false;
                this.editing=-1;
            },
            clearData: function(){
                this.completeForm("","","", -1);
            },
            goFirst: function(){
                this.currentItem=0;
            },
            goNext: function(){
                if(this.currentItem<(this.completeList.length-1)){
                    this.currentItem++;
                }
            },
            goBack: function(){
                if(this.currentItem>0){
                    this.currentItem--;
                }
            },
            goLast: function(){
                this.currentItem=this.completeList.length-1;
            },
            getData: async function(){
                 var data = await this.wController.getWords(globalData.userId, this.checked);
                 this.listTechnos = (await this.tController.searchTechnos(globalData.userId, "", "0", "1")).list;
                 this.completeList = data.list;
                 this.size=data.size;
                this.listWords= this.completeList;
                this.currentItem=0;
            },
            changeSort: function(ch){
                this.checked=ch;
                this.getData();
            },
            searchWords: async function(){
                var data = await this.wController.searchWords(globalData.userId, this.techno_id, this.word,this.translation, this.tSearch);
                this.completeList = data.list;
                 this.size=data.size;
                this.listWords= this.completeList;
                this.currentItem=0;
            }
        }
    }
));
//
//
//
var technoView = Vue.component('techno-component',(
    {
        name:'techno-component',
        created: async function(){
           this.tController = new technoController();
           await this.getData();
           this.$refs.techno.focus();
        },
        watch:{
        },
        data:function(){
            return{
            listTechnos:[],
            completeList:[],
            technology:"",
            active: "",
            disabled: false,
            editing: -1,
            currentView:null,
            tController: null,
            currentItem:0,
            size:0,
            messageData:"",
            colorClass:["redBackColor","yellowBackColor","greenBackColor", ""],
            colorOpt:3,
            checked:0,
            tSearch:0,
            techno_id:-1
            }
            
        },
        methods:{
            createTechno: async function(){
                if(this.technology==0 || this.active==""){
                    this.messageData="please, complete all the form";
                        this.colorOpt=1;
                }
                else if(this.editing==-1){
                    var result = await this.tController.createTechno(globalData.userId, this.technology, this.active);
                    if(result=="1"){
                        this.messageData="word successfully saved";
                        this.colorOpt=2;
                    }
                    else if(result==""){
                        this.messageData="word had been already saved";
                        this.colorOpt=1;
                    }
                    else{
                        this.messageData="a problem happened";
                        this.colorOpt=0;
                    }
                    await this.getData();
                }
                else{
                    var result = await this.tController.updateTechno(globalData.userId, this.techno_id, this.technology, this.active);
                    if(result=="1"){
                        this.messageData="word successfully updated";
                        this.colorOpt=2;
                    }
                    else{
                        this.messageData="a problem happened";
                        this.colorOpt=0;
                    }
                    await this.getData();
                }
                this.clearData();
                this.$refs.techno.focus();
            },
            readTechno: function(index){
                this.completeForm(this.listTechnos[this.currentItem][index].technology, this.listTechnos[this.currentItem][index].active);
                this.disabled=true;
            },
            updateTechno: function(index){
                this.completeForm(this.listTechnos[this.currentItem][index].technology, this.listTechnos[this.currentItem][index].active);
                this.techno_id=this.listTechnos[this.currentItem][index].techno_id;
                this.editing=index;
            },
            deleteTechno: async function(index){
                var r = confirm("do you really want to delete this technology?");
                if (r == true) {
                    var result = await this.tController.deleteTechno(globalData.userId, this.listTechnos[this.currentItem][index].techno_id);
                if(result=="1"){
                        this.messageData="technology successfully deleted";
                        this.colorOpt=2;
                    }
                    else{
                        this.messageData="a problem happened";
                        this.colorOpt=0;
                    }
                await this.getData();
                this.clearData();
                }
                
            },
            completeForm: function(nTechnology, nActive){
                this.technology=nTechnology;
                this.active=nActive;
                this.disabled=false;
                this.editing=-1;
            },
            clearData: function(){
                this.completeForm("", "");
            },
            goFirst: function(){
                this.currentItem=0;
            },
            goNext: function(){
                if(this.currentItem<(this.completeList.length-1)){
                    this.currentItem++;
                }
            },
            goBack: function(){
                if(this.currentItem>0){
                    this.currentItem--;
                }
            },
            goLast: function(){
                this.currentItem=this.completeList.length-1;
            },
            getData: async function(){
                 var data = await this.tController.getTechnos(globalData.userId, this.checked); 
                 this.completeList = data.list;
                 this.size=data.size;
                this.listTechnos= this.completeList;
                this.currentItem=0;
            },
            changeSort: function(ch){
                this.checked=ch;
                this.getData();
            },
            searchTechnos: async function(){
                var data = await this.tController.searchTechnos(globalData.userId, this.technology, this.active);
                this.completeList = data.list;
                 this.size=data.size;
                this.listTechnos= this.completeList;
                this.currentItem=0;
            }
        }
    }
));
//
//
//
var testView = Vue.component('test-component',(
    {
        name:'test-component',
        created: async function(){
            this.tController = new testController();
            this.tecController = new technoController();
            await this.getTests();
            await this.nextWord();
        },
        watch:{
        },
        data:function(){
            return {
                nQuestions:100,
                nQuestion:0,
                tController: null,
                currentQuestion:null,
                checked:-2,
                correct:0,
                arrow:0,
                currentMessage:"",
                listTechnos:[],
                tecController: null,
                colorClass:["redBackColor","yellowBackColor","greenBackColor", ""],
                nColor:1,
                techno_id: 0
            }
        },
  mounted () {
  document.addEventListener("keyup", this.keyEvent);
  },
        methods:{
            nextWord: async function(){
                if(this.checked!=-1){
                    this.checked=-1;
                    this.currentQuestion = await this.tController.nextWord(globalData.userId, this.techno_id); 
                   if(this.nQuestion==this.nQuestions){
                    await this.tController.saveTest(globalData.userId, this.correct, this.nQuestions);
                    window.alert("You get a score of "+this.correct+" of "+this.nQuestion);
                    this.cleanExam();
                }
                this.nQuestion++;
                this.currentMessage="";
                this.nColor = 3;
                }
                else{
                 this.currentMessage="please choose an option";
                 this.nColor = 1;
                }
                
            },
            updateSol: function(index){
               if(this.checked==-1){
                    this.checked=index;
                    this.correct = this.correct+(this.currentQuestion.opts[index]==this.currentQuestion.sol?1:0);
                }
            },
            colorOpt: function(index){
                var classes=["col-md-11"];
                if(this.checked!=-1){
                   if(this.currentQuestion.opts[index]==this.currentQuestion.sol){
                       
                    classes.push("greenBackColor");
                }
                else if(this.currentQuestion.opts[index]!=this.currentQuestion.sol && this.checked==index){
                    classes.push("redBackColor");
                } 
                }
                classes.push(index==this.arrow?"borderClass":"");
                return classes;
            },
            cleanExam:  function(){
                this.nQuestion=0;
                this.correct=0;
            },
            reloadExam: async function(){
                this.cleanExam();
                this.nQuestion=1;
                await this.nextWord();
            },
            updateTecho: async function(){
                this.checked = -2;
                this.cleanExam();
                this.nQuestion=0;
                await this.nextWord();
            },
            getTests: async function(){
                let allOPtions = new technoModel("-----", globalData.userId, 0);
                this.listTechnos = (await this.tecController.searchTechnos(globalData.userId, "", "0", "1")).list;
                this.listTechnos = [allOPtions].concat(this.listTechnos);
            },
            keyEvent: function(event){
                if((event.keyCode==38 || event.keyCode==87) && this.arrow!=0){
                    this.arrow--;
                }
                else if((event.keyCode==40 || event.keyCode==83) && this.arrow!=3){
                    this.arrow++;
                }
                else if(event.keyCode==13){
                    this.updateSol(this.arrow);
                    this.colorOpt(this.arrow);
                }
                else if(event.keyCode==39 || event.keyCode==68){
                    this.nextWord();
                }
            },
            activeColor: function(){
                return globalData.activeColor(this.correct, this.nQuestion);
            }
            
        }
    }
));
//
//
//
Vue.prototype.$eventBus = new Vue();

var app = new Vue({
      el: '#app',
      created: function(){
        this.$eventBus.$on('loginFalse', (nValue) => {
            this.showLogin=nValue;
});  
      },
      data:{
          showLogin:true
      }
    });