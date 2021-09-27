class Intro {
    constructor() {
        this.button = createButton('Next');
        this.title = createElement('h1');
        this.title1 = createElement('h2');
        this.title2 = createElement('h2');
        this.title3 = createElement('h2');
        this.title4 = createElement('h2');
        this.title5 = createElement('h2');
        this.title6 = createElement('h2');
        this.title7 = createElement('h2');
        this.title8 = createElement('h2');
        this.title9 = createElement('h2');
        
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
        this.title2.hide();
        this.title2.hide();
        this.title3.hide();
        this.title4.hide();
        this.title5.hide();
        this.title6.hide();
        this.title7.hide();
        this.title8.hide();
        this.title9.hide();
       
    }

    display(){
        this.textsize = 500;
        this.color='white';

        this.title.html("TASC");
        this.title.position(displayWidth/2 - 65,displayHeight/2-400);

        this.title1.html("“ TASC ” is an undercover team operating under the guidance of NIA.");
        this.title1.position(displayWidth/2 - 360 ,displayHeight/2-360 );

        this.title2.html("This is a recruitment process and you will go through four rounds..");
        this.title2.position(displayWidth/2 - 510, displayHeight/2-300 );

        this.title3.html("Stage 1: Risk Assessment");
        this.title3.position(displayWidth/2 - 510, displayHeight/2-250);

        this.title4.html("Stage 2: Timing & Analysis");
        this.title4.position(displayWidth/2 -513, displayHeight/2-200);

        this.title5.html("Stage 3: Reflex Abilitiy");
        this.title5.position(displayWidth/2 -514,displayHeight/2-150);

        this.title6.html("Stage 4: General Knowledge");
        this.title6.position(displayWidth/2 -514,displayHeight/2-100);

        this.title7.html("Earn points for clearing every stage.");
        this.title7.position(displayWidth/2 -515,displayHeight/2-30);

        this.title8.html("The total number of points at the end of the four stages wil detemine if you");
        this.title8.position(displayWidth/2 -515,displayHeight/2+10);

        this.title9.html("are eligible to be recruited by TASC.");
        this.title9.position(displayWidth/2 -515,displayHeight/2+50);

        
        this.button.position(displayWidth/2 + 500 , displayHeight/2 + 80);
       
       
        this.button.mousePressed(()=>{
            this.button.hide();
            this.title.hide();          
            this.title1.hide();
            this.title2.hide();
            this.title3.hide();
            this.title4.hide();
            this.title5.hide();
            this.title6.hide();
            this.title7.hide();
            this.title8.hide();
            this.title9.hide();
      
          gameState=1;

          rule1=new Rule1;
          rule1.display();

          //console.log(gameState)

        });
    }
}