# CP01 - FIAP Kitchenet App

---

## SOBRE O PROJETO

### ⤷ Nome do app e função
O Fiap Kitchenet é um aplicativo mobile desenvolvido com React Native (Expo), inspirado na Kitchenet da FIAP.
O app tem como objetivo facilitar a experiência dos alunos na hora de comprar alimentos, oferecendo:

- Visualização do cardápio;
- Localização dos alimentos por andar.

Assim, o aplicativo ajuda a tirar dúvidas sobre produtos e o diminuir tempo de espera.

---

### ⤷ Por que foi escolhido?
Como aluna que utiliza frequentemente a Kitchenet, percebi dificuldades como:

- Dúvidas sobre em qual andar certos alimentos estão localizados;
- Tempo perdido em filas.

Por isso, o projeto foi pensado para resolver esses problemas de forma prática e acessível.

---

### ⤷ Funcionalidades implementadas
- Visualização dos itens;
-  Identificação do andar dos produtos;
- Navegação entre telas.
  
---

## INTEGRANTES

### ⤷ Nome e RM:
Laís Krajner Lacerda, RM563182

---

## COMO RODAR O PROJETO

### ⤷ Pré-requisitos:
Você precisa ter instalado:

- Node.js
- Expo (via npx)
- Expo Go no celular ou emulador (Android Studio)

---

### ⤷ Passo a passo:

```bash
# Clone o repositório
git clone https://github.com/renjark/fiap-cpad-cp1-kitchenet-app.git

# Acesse a pasta
cd fiap-cpad-cp1-kitchenet-app

# Instale as dependências
npm install

# Inicie o projeto
npx expo start
```

Depois disso, escaneie o QR Code com o Expo Go ou execute no emulador (opção "a").

---

##  DEMONSTRAÇÃO

<img src="https://github.com/user-attachments/assets/8784ebe0-33c7-445c-ae30-de5ac9da36e8" width="320" height="720" align="left"/>

No vídeo apresentado, utilizamos o simulador do Android Studio, especificamente o dispositivo Pixel 3. Ao abrir o aplicativo, a primeira função visível é a de pesquisa, onde é possível digitar o nome do alimento desejado e localizá-lo. Na parte superior da tela, existe a opção de filtrar os alimentos por andar, considerando que na FIAP paulista, os andares disponíveis são o 5° e o 7°, que contam com a Kitchenet. Por último, ao selecionar um alimento, o usuário poderá visualizar uma breve descrição contendo o nome, o preço e informações adicionais sobre o item.

---

## DECISÕES TÉCNICAS

### ⤷ Estrutura do projeto
O projeto foi dividido em componentes e telas, separando responsabilidades para facilitar manutenção e organização.

---

### ⤷ Navegação
Foi utilizada navegação entre telas para melhorar a experiência do usuário, permitindo fluxo simples e intuitivo dentro do app.

---

## PRÓXIMOS PASSOS
- Implementar autenticação de usuário/Login
- Melhorias na interface (UI/UX)
