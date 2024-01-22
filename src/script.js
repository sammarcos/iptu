

const 
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v ),
   _ = ( ...args ) => console.log( ...args ),
   _e = ( ...args ) => console.error( ...args )
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

} );