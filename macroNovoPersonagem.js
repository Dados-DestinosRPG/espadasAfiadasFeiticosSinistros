function escolherClasse() {
  const d = new Dialog({
    title: "Novo Personagem",
    content: "<p>Escolha a classe de seu personagem</p>",
    buttons: {
      one: {
        icon: '<i class="fas fa-axe"></i>',
        label: "Guerreiro",
        callback: () => classeEscolhida("Guerreiro", '1d10', '1d6' ,'</br>2 armas</br>Armadura leve ou média</br>1 escudo ou 1 arma adicional')
      },
      two: {
        icon: '<i class="fas fa-sword"></i>',
        label: "Especialista",
        callback: () => classeEscolhida("Especialista", '1d8', '1d10', '</br>2 armas</br>Armadura leve</br>1 kit de vocação')
      },
      opa: {
        icon: '<i class="fas fa-staff"></i>',
        label: "Conjurador",
        callback: () => classeEscolhida("Conjurador", '1d6', '1d6' ,'</br>1 arma</br>1 Grimório</br>Ingredientes e amuletos da vocação')
      }
    },
    //render: html => console.log("Register interactivity in the rendered dialog"),
    //close:  html => console.log("Register interactivity in the rendered dialog"),
  })

  d.render(true)
}

function atributos() {
  const r = new Roll("1d36").evaluate({ async: false }).result;
  const complicacao = game.tables.getName('Complicação').getResultsForRoll(r)[0]['text'];
  const fisico = new Roll("3d6").evaluate({ async: false }).result;
  const intelecto = new Roll("3d6").evaluate({ async: false }).result;
  const agilidade = new Roll("3d6").evaluate({ async: false }).result;
  const vontade = new Roll("3d6").evaluate({ async: false }).result;
  const moedas = new Roll("3d6").evaluate({ async: false }).result;
  const inicial = '</br>Mochila</br>2 sacos pequenos</br>Corda</br>Tochas</br>Lanternas</br>Arpéu</br>Pinos de metal</br>Ração';

  const chatContent = `
  <b>Físico:</b> ${fisico}<br/>
  <b>Agilidade:</b> ${agilidade}<br/>
  <b>Intelecto:</b> ${intelecto}<br/>
  <b>Vontade:</b> ${vontade}<br/>

  <b>Moedas de prata:</b> ${moedas}<br/>
  <b>Recursos:</b> 1d4<br/>
  <b>Complicação:</b> ${complicacao}<br/>
  
  <b>Equipamentos Iniciais:</b> ${inicial}<br/>
`;

  ChatMessage.create({ content: chatContent });
}

function classeEscolhida(classe, hitDice, luckDice, item) {
  const pvs = new Roll(hitDice).evaluate({ async: false }).result;

  const chatContent = `
    <h1>${classe}</h1>
    <b>Dado da Sorte</b> ${luckDice}<br/>
    <b>Pontos de vida:</b> ${pvs}<br/>
    <b>Equipamentos de classe:</b> ${item}<br/>
`;

  ChatMessage.create({ content: chatContent });

}

atributos()
escolherClasse()
