# Macros para Espadas Afiadas e Feitiços Sinistros no Roll 20

![image](https://github.com/Dados-DestinosRPG/espadasAfiadasFeiticosSinistros/assets/1184178/95339f67-5978-451e-b427-a506567c419c)

**01-Físico**\
`
/me &{template:default}{{name=@{character_name}}}{{Teste de Físico}}{{[[?{Tipo de teste|Normal,1d20|Desvantagem,2d20kh1|Vantagem,2d20kl1}<[[@{Físico}+?{Modificador|0}]]]]=sucessos}}
`

**02-Agilidade**\
`
/me &{template:default}{{name=@{character_name}}}{{Teste de Agilidade}} {{[[?{Tipo de teste|Normal,1d20|Desvantagem,2d20kh1|Vantagem,2d20kl1}<[[@{Agilidade}+?{Modificador|0}]]]]=sucessos}}
`

**03-Intelecto**\
`
/me &{template:default}{{name=@{character_name}}}{{Teste de Intelecto}}{{[[?{Tipo de teste|Normal,1d20|Desvantagem,2d20kh1|Vantagem,2d20kl1}<[[@{Intelecto}+?{Modificador|0}]]]]=sucessos}}
`

**04-Vontade**\
`
/me &{template:default}{{name=@{character_name}}}{{Teste de Vontade}}{{[[?{Tipo de teste|Normal,1d20|Desvantagem,2d20kh1|Vantagem,2d20kl1}<[[@{Vontade}+?{Modificador|0}]]]]=sucessos}}
`

**05-Dado-de-Sorte**\
`
/me &{template:default}{{name=@{character_name}}}{{Rolando dado de sorte}} {{[[@{Dado de sorte}>3]]=sucessos}}
`

**06-Dado-de-Vida**\
`
/me &{template:default}{{name=@{character_name}}}{{Rolando dado de vida}}{{[[@{Dado de Vida}]]=Pontos de vida}}
`

**07-Iniciativa**\
`
/me &{template:default}{{name=@{character_name}}}{{Iniciativa}}{{[[@{Dado de Vida} &{tracker}]]=iniciativa}}
`

**08-Ataque**\
`
/me &{template:default}{{name=@{character_name}}}{{Atacando}}{{[[?{Tipo de ataque|Normal,1d20|Desvantagem,2d20kh1|Vantagem,2d20kl1}<?{Escolhe seu ataque|Corpo a corpo,@{Físico}|A distância,@{Agilidade}}]]=sucessos}}
`

**09-Dano**\
`
/me &{template:default}{{name=@{character_name}}}{{Rolando o dano}}{{[[?{Dano|1d4,1d4|1d6,1d6|1d8,1d8|1d10,1d10|1d12,1d12|1d20,1d20}+?{Modificador|0}}]]=de dano}}
`

**10-Magia**\
`
/me &{template:default}{{name=@{character_name}}}{{Usando Magia}}{{[[?{Tipo de teste|Normal,1d20|Desvantagem,2d20kh1|Vantagem,2d20kl1}<[[@{Vontade}-?{Nível de Poder|1}]]]]=sucessos}}
`

**Mestre**\
`
/me &{template:default}{{name=Rolada do Mestre}}{{[[{?{Tipo de teste|Normal,1d20|Desvantagem,2d20kl1|Vantagem,2d20kh1}+?{Modificador|0}}>[[?{Desafio|0}+1]]]]=sucessos}}
`

**Novo-Personagem**\
`
/me &{template:default}{{name=Criando Personagem}}{{Físico=[[3d6]]}}{{Agilidade=[[3d6]]}}{{Intelecto/Sanidade=[[3d6]]}}{{Vontade=[[3d6]]}}{{Complicação=[[1d6]]-[[1d6]]}}{{Moedas de prata=[[3d6]]}} {{Tochas=[[1d4]]}} {{Ração=[[1d4]]}}
`
