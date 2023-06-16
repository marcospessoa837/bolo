navbar  =  document . querySelector ( '.navbar' ) ;

documento . querySelector ( '#menu-btn' ) . ao clicar  =  ( )  => {
    barra de navegação . classList . alternar ( 'ativo') ;
    searchForm . classList . remover ( 'ativo' ) ;
    cartItem . classList . remover ( 'ativo' ) ;
}

deixe  searchForm  =  document . querySelector ( '.search-form' ) ;

documento . querySelector ( '#search-btn' ) . ao clicar  =  ( )  => {
    searchForm . classList . alternar ( 'ativo' ) ;
    barra de navegação . classList . remover ( 'ativo' ) ;
    cartItem . classList . remover ( 'ativo' ) ;
}

deixe  carrinhoItem  =  documento . querySelector ( '.cart-items-container' ) ;

do {
    documento . querySelector ( '#cart-btn' ) . ao clicar  =  ( )  => {
    
} while (condition);    cartItem . classList . alternar ( 'ativo' ) ;
    barra de navegação . classList . remover ( 'ativo' ) ;
    searchForm . classList . remover ( 'ativo' ) ;
}

janela . onscroll  =  ( )  => {
    barra de navegação . classList . remover ( 'ativo' ) ;
    searchForm . classList . remover ( 'ativo' ) ;
    cartItem . classList . remover ( 'ativo' ) ;
}