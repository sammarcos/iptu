

const 
   _ = ( ...args ) => console.log( ...args ),
   _e = ( ...args ) => console.error( ...args ),
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v )
;

window.addEventListener( "load", () => {
   const 
      NavLinks = $$( "navlink" ),
      C = $$( "[c]" ),
      BG = $$( "[bg]" ),
      Pd = $$( "[pd]" ),
      Focus = $$( "img" ),
      tAs = $$( "[t-a]" ),
      OCs = $$( "oc" ),

      W = $$( "[w]" ),
      H = $$( "[h]" ),
      M = $$( "[m]" ),
      P = $$( "[p]" ),
      Columns = $$( "[columns]" ),
      Rows = $$( "[rows]" ),

      btn_menu = $( "appbar-options" ),
      btn_x = $( "btn-x" ),
      drawer = $( "drawer" )
   ;




   NavLinks.forEach( link => link.addEventListener( "click", ev => {
      window.open( link.getAttribute( "src" ), "_blank" );
   } ) );



   C.forEach( c => c.style.color = c.getAttribute( "c" ) );
   BG.forEach( bg => bg.style.backgroundColor = bg.getAttribute( "bg" ) );
   Pd.forEach( pd => pd.style.padding = pd.getAttribute( "pd" ) );
   tAs.forEach( t => t.style.textAlign = t.getAttribute( "t-a" ) );


   /* 
   <oc>
      <>any</>
      <>any</>
   </oc>
   */
   OCs.forEach( o => o.addEventListener(
      "click", ev => {
         if( o.getAttribute( "open" ) == "" ) {
            o.removeAttribute( "open" );
            o.lastElementChild.style.visibility = "collapse";
            o.lastElementChild.style.height = "0";
         } else {
            o.setAttribute( "open", "" );
            o.lastElementChild.style.visibility = "visible";
            o.lastElementChild.style.height = "auto";
         }
      }
   ) );

   W.forEach( v => v.style.width = v.getAttribute( "w" ) );
   H.forEach( v => v.style.height = v.getAttribute( "h" ) );
   M.forEach( v => v.style.margin = v.getAttribute( "m" ) );
   P.forEach( v => v.style.padding = v.getAttribute( "p" ) );
   Columns.forEach( v => v.style.gridTemplateColumns = v.getAttribute( "columns" ) );
   Rows.forEach( v => v.style.gridTemplateRows = v.getAttribute( "rows" ) );

   Focus.forEach( img => img.addEventListener( "click", ev => {
   } ) );

   btn_menu.addEventListener( "click", ev => {
      if( drawer.getAttribute( "active" ) == "" ) {
         drawer.removeAttribute( "active" );
         drawer.style.visibility = "hidden";
         drawer.style.width = "0";
      } else {
         drawer.setAttribute( "active", "" );
         drawer.style.visibility = "visible";
         drawer.style.width = "75vw";
      }
   } );

   btn_x.addEventListener( "click", ev => {
      drawer.removeAttribute( "active" );
      drawer.style.visibility = "hidden";
      drawer.style.width = "0";
   } );


   /* == [ card-item header class ]
   == == == == == == == == == */
   const 
      CIHeaderTemplate = `
      <style>
         titulo{
            display: grid;
            grid-template-columns: repeat( auto-fit, minmax( 100px, max-content ) );
            width: 100%;
            justify-content: center;
            align-items: center;
         }
         titulo :first-child {
            font-size: 1.5rem;
            font-weight: bold;
         }
         p {
            display: grid;
            place-items: center;
            width: 100%;
            height: 100%;
            padding: 0 2px;
            background: #ff7a18;
            font-weight: 900;
            color: #fff;
         }
      </style>
      <titulo>
         <t></t>
         <t></t>
      </titulo>
      <p></p>
      `
   ;
   class PageHeader extends HTMLElement {
      constructor() {
         super();

         let 
            element = document.createElement( "template" )
         ;

         element.innerHTML = CIHeaderTemplate;

         this.attachShadow( { mode: "open" } );
         this.shadowRoot.append( 
            element.content.cloneNode( true )
         );

         this.style.background = this.getAttribute( "bg" );
         _( this.querySelector( "p" ) );
         this.shadowRoot.querySelector( "p" ).innerText = this.getAttribute( "ano" );
         this.shadowRoot.querySelector( "titulo :first-child" ).innerHTML = this.getAttribute( "t1" );
         this.shadowRoot.querySelector( "titulo :last-child" ).innerHTML = this.getAttribute( "t2" );

      }
   }
   window.customElements.define( "page-header", PageHeader );

   /* == [ card-item class ]
   == == == == == == == == == */
   const 
      CITemplate = `
         <style>
            h2 { color: #0089c7; }
            [boleto] { height: 150px; }
            [boleto] > img { height: 100%; }
            [comprovante] { width: 150px; }
            [comprovante] > img { width: 100%; }
            navlink { cursor: pointer; }
         </style>
         <h2></h2>
         <navlink src="" boleto>
            <img src="./src/boleto.png" alt="">
         </navlink>
         <navlink src="" comprovante>
            <img src="./src/comprovante.png" alt="">
         </navlink>
      `
   ;
   
   class CardItem extends HTMLElement {
      constructor() {
         super();

         let 
            element = document.createElement( "template" )
         ;

         element.innerHTML = CITemplate;

         this.attachShadow( { mode: "open" } );
         this.shadowRoot.append( 
            element.content.cloneNode( true )
         );
         
         this.shadowRoot.querySelector( "h2" ).innerHTML = `
            Parcela ${ this.getAttribute( "idn" ) }
         `;
         
         this.shadowRoot.querySelector( "navlink[boleto]" ).setAttribute( 
            "src", 
            `${ this.getAttribute( "boleto" ) }`
         );
         
         this.shadowRoot.querySelector( "navlink[comprovante]" ).setAttribute( 
            "src", 
            `${ this.getAttribute( "comprovante" ) }`
         );

         this.getAttribute( "status" ) != "1" ? 
            _( "" ) : this.setAttribute( "pago", "" );
            
         this.shadowRoot.querySelectorAll( "navlink" ).forEach( link => link.addEventListener( "click", ev => {
            window.open( link.getAttribute( "src" ), "_blank" );
         } ) );
      }
   }
   window.customElements.define( "card-item", CardItem );

   for( i in acordo ) {
      let 
         elemento = document.createElement( `ano${ acordo[i].id }` )
      ;
      
      document.querySelector( "main" ).innerHTML +=
         `<ano${ acordo[i].id } card id="ano${ acordo[i].id }">
            <page-header 
               bg="#fff2df"
               t1="${ acordo[i].id }° ano"
               t2="parcelas: 
                  ${   
   acordo[i].ano == "2023" ? "1 - 5 / 120" 
      : acordo[i].ano == "2024" ? "6 - 17 / 120" 
         : acordo[i].ano == "2025" ? "18 - 29 / 120" 
            : acordo[i].ano == "2026" ? "29 - 41 / 120" 
               : acordo[i].ano == "2027" ? "41 - 53 / 120" 
                  : acordo[i].ano == "2028" ? "53 - 65 / 120" 
                     : acordo[i].ano == "2029" ? "65 - 77 / 120" 
                        : acordo[i].ano == "2030" ? "77 - 89 / 120" 
                           : acordo[i].ano == "2031" ? "89 - 101 / 120" 
                              : acordo[i].ano == "2032" ? "101 - 113 / 120" 
                                 : "113 - 120 / 120" 
}
               "
               ano="${ acordo[i].ano }"
            >
            </page-header>
            <home>
               <parcelas></parcelas>
            </home>
         </ano${ acordo[i].id }>   
         `;
   }

   for( i in acordo ) {

      acordo[i].parcelas.forEach( parcela => {
         document.querySelector( `ano${ acordo[i].id } > home > parcelas` ).innerHTML += `
            <card-item 
               idn="${ parcela.id }"
               boleto="${ acordo[i].basePath }${ parcela.boleto }"
               comprovante="${ acordo[i].basePath }${ parcela.comprovante }"
               status="${ parcela.status }"
            >
            </card-item>
         `;
      } );

   }

} );