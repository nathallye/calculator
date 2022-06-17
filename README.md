# Projeto Calculadora(Calculator)

## Iniciando um projeto com a CLI(Command Line Interface) do React Native

- Dentro da pasta que desejamos criar o projeto, vamos executar o comando seguinte:

```
npx react-native init calculator
                      [nome-do-projeto]
```

- Concluindo a inicialização do projeto, vamos entrar na pasta do projeto criada e rodar o comando para inicializar o Metro Bundle(o qual vai compilar o JS e passar para o app conseguir renderizar):

```
npx react-native start
```

- Obs.: Antes de startar o android, é necessário se conectar a máquina virtual ao IP do emulador, rodando o comando abaixo:

```
adb connect 10.0.2.2:5555
```

- Vamos deixar rodando o Metro e abrir um novo terminal no diretório do projeto e realizar a instalação do Android:

```
yarn android ou npx react-native run-android
```

## Alterando estrutura de pastas

- Na raíz do projeto vamos criar uma pasta _src_ e vamos mover o arquivo _App.js_ para dentro dela e apagar todo o conteúdo dele.

- Dentro do arquivo _index.js_ vamos alterar a referência para o arquivo App para o novo que criamos dentro de _src_:

``` JS
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

- Isso ocasionou um erro no nosso emulador Android. Para resolver esse problema, dentro do novo arquivo _App.js_ vamos criar uma constante _App_ que vai receber uma arrow funcion/_() =>_ que vai retornar/_return_ vazio/_null_ e em seguida exportar por padrão/_export default_ para que esse componente fique acessível:

``` JS
const App = () => {
  return null;
};

export default App;
```

- E para deixar tudo pronto para implementação de código JSX e dos componentes do react native, vamos importá-los:

``` JS
import React from "react";
import { } from "react-native";

const App = () => { // podemos criar diretamente uma função chamada App também
  return null;
};

export default App;
```

- Para visualizarmos algo em tela, vamos importar o componente _Text_ do react native e referenciá-lo, inserindo nele o nome Calculator:

``` JSX
import React from "react";
import { Text } from "react-native";

const App = () => { 
  return (
    <Text>Calculator</Text>
  );
};

export default App;
```


## Criando o componente Botão/Button #01

- Dentro da pasta src vamos criar uma pasta chamada _components_ e dentro dela vamos criar um componente funcional chamado _Button_:

``` JSX
import React from "react";
import { Text } from "react-native";

const Button = (props) => {
  return (
    <Text>0</Text>
  );
}

export default Button;
```

- Agora, vamos definir os estilos do botão. Primeiramente, vamos importar o _StyleSheet_ do react native e criar um objeto de estilo chamado _styles_:

``` JSX
import React from "react";
import { StyleSheet, Text } from "react-native";

const Button = (props) => {
  return (
    <Text>0</Text>
  );
}

const styles = StyleSheet.create({
  
})

export default Button;
```

- Em seguida, vamos criar o objeto _button_ e referênciar ele no componente _Text_ através da propriedade _style_ e nesse objeto de estilo/componente Text iremos aplicar as seguintes propriedades de estilo => _fontSize_ 40(para aumentar o tamanho da fonte):

``` JSX
import React from "react";
import { StyleSheet, Text, } from "react-native";

const Button = (props) => {
  return (
    <Text style={styles.button}>0</Text>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
  }
})

export default Button;
```

- A propriedade _height_ para definirmos a altura do botão, a qual iremos usar a API _Dimensions_ e o método _get_ para pegarmos o tamanho da janela/_window_, nesse caso queremos a largura da janela então iremos usar o método _wedth_ e dividir tudo isso por 4.
O que resultará na largura da janela dividido por 4, pois a calculadora padrão do mac tem 4 colunas iguais, ou seja, a largura total da janela dividido em 4 botões de alturas iguais:

``` JSX
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

const Button = (props) => {
  return (
    <Text style={styles.button}>0</Text>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,

    height: Dimensions.get("window").width / 4,
  }
})

export default Button;
```

- A propriedade _width_ para definirmos a largura do botão, a qual iremos usar a API _Dimensions_ e o método _get_ para pegarmos o tamanho da janela/_window_, nesse caso também queremos a largura da janela então iremos usar o método _wedth_ e dividir tudo isso por 4, ou seja, tanto a altura quanto a largura do botão serão baseados na largura da janela/tela celular, para que o botão seja quadrado:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";

const Button = (props) => {
  return (
    <Text style={styles.button}>0</Text>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
  }
})

export default Button;
```

- A propriedade _padding_ para criar um espaçamento entre a borda e o conteúdo e a propriedade _textAling_ para alinhar o conteúdo ao centro:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";

const Button = (props) => {
  return (
    <Text style={styles.button}>0</Text>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,

    textAlign: "center",

    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,

  }
})

export default Button;
```

- A propriedade _backgroundColor_ para aplicarmos um tom de cinza a esse botão:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";

const Button = (props) => {
  return (
    <Text style={styles.button}>0</Text>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f0f0f0",

    fontSize: 40,

    textAlign: "center",

    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,

  }
})

export default Button;
```

- A propriedade _bordeWidth_ para aumentar a espessura da borda e a propriedade _bordeColor_ para que essa borda tenha um tom de cinza mais escuro:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";

const Button = (props) => {
  return (
    <Text style={styles.button}>0</Text>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f0f0f0",

    fontSize: 40,

    textAlign: "center",

    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,

    borderWidth: 1,
    borderColor: "#888",
  }
})

export default Button;
```

- Agora, vamos envolver nosso componente _Text_ com o componente _TouchableHighlight_, esse componente irá notificar o componente pai através da função chamada _onClick_ recebida via _props_ quando evento _onPress_ for acionado:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>0</Text>
    </TouchableHighlight>
  );
}

// [...]

export default Button;
```

- Em seguida, ao invés de passarmos um número fico para o botão, vamos passar o _label_ que também iremos receber via _props_ do componente pai:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
}

// [...]

export default Button;
```

- Uma vez que temos o componente _Button_ implementado, no componente de renderização principal vamos importar o _Button_.
Em seguida, podemos apagar o componente _Text_ e inserir uma _View_ que vai receber o objeto de estilo chamado _container_ e dentro dela outra _View_ que vai receber o objeto de estilo _buttons_:

``` JSX
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './components/Button';

const App = () => { 
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>

      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {

  },
  buttons: {
    
  }
})

export default App;
```

- E dentro dessa _View_ vamos referênciar o componente _Button_ para cada botão da calculadora, enviando via props o _label_ de cada um:

``` JSX
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './components/Button';

const App = () => { 
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button label="AC" />
        <Button label="/" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {

  },
  buttons: {
    
  }
})

export default App;
```

- Por fim, vamos definir os estilos para _container_ e _buttons_.
Em _container_ vamos aplicar o _flex 1_ para permitir que ele cresça em todo o espaço disponível e em _buttons_ vamos mudar o _flexDirection_ para _row_ e o _flexWrap_ igual a _wrap_ para permitir que quebre a linha quando não couber mais:

``` JSX
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './components/Button';

const App = () => { 
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button label="AC" />
        // [...]
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  }
})

export default App;
```

### Componente Display

- Dentro da pasta _components_ vamos criar o componente funcional _Display_:

``` JSX 
import React from "react";
import { StyleSheet, View } from "react-native";

const Display = (props) => {
  return (
    <View></View>
  );
}

const styles = StyleSheet.create({
  
})

export default Display;
```

- Em seguida, vamos criar os objetos de estilo que iremos usar nesse componente _Display_.
Vamos aplicar na _View_ o objeto de estilo _display_ e também vamos inserir um componente _Text_ que vamos aplicar o objeto de estilo _displayValue_ que vai equivaler ao valor exibido no display:

``` JSX
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Display = (props) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue}>
        
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: "rgba(0,0,0,0.6)",

    flex: 1, // permite o componente crescer 
    justifyContent: "center", // para trabalharmos com alinhamento em relação ao Eixo Principal/main axis(que nesse caso é a coluna/column)
    alignItems: "flex-end", // para trabalharmos no alinhamento dos elementos/flex items no eixo cruzado/cross axis(que nesse caso é no eixo da linha/row) 

    padding: 20 // espaçamento entre a borda e conteúdo
  },

  displayValue: {
    fontSize: 60, // altera o tamanho da font
    color: "#fff", // altera a cor da fonte
  }
})

export default Display;
```

- Além disso, no componente _Text_ vamos definir o número de linhas que ele vai ter, que nesse caso vai ser 1. 
E o valor a ser exibido nesse _Text_ vamos receber via props do componente pai: 

``` JSX
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Display = (props) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} 
        numberOfLines={1}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // [...]
})

export default Display;
```

- Agora, vamos importar esse componente _Display_ dentro do componente App:

``` JSX
import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Display from "./components/Display";

const App = () => { 
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button label="AC" />
        // [...]
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // [...]
})

export default App;
```

- Em seguida, vamos criar um estado para o componente App, onde o _useState_ irá receber um objeto e dentro dele teremos inicialmente um único atributo chamado _displayValue_ que seu valor inicial será "0" e iremos apontar para a propriedade _value_ do componente _Display_ o estado desse objeto:

``` JSX
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Display from "./components/Display";

const App = () => { 

  const [state, setState] = useState({
    displayValue: "0",
  })
  

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button label="AC" />
        // [...]
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // [...]
})

export default App;
```

- Agora, em cima da _View_ onde temos os buttons iremos referênciar o componente _Display_ passando via props o _value_ apontando para o estado do _displayValue_:

``` JSX
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Display from "./components/Display";

const App = () => { 

  const [state, setState] = useState({
    displayValue: "0",
  })
  

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" />
        // [...]
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // [...]
})

export default App;
```

## Criando o componente Botão/Button #02

- Agora, vamos trabalhar outros estilos importantes para ter a calculadora seguindo o modelo do modelo(calculadora mac). Por exemplo, os botão de operações tem um tom de laranja, diferindo das demais teclas e o botão AC vai ocupar espaços de 3 colunas e o botão 0 vai ocupar 2 espaços de colunas.
Para isso, primeiramente vamos criar um novo objeto de estilo chamado botão de operação/_operationButton_ o qual vai receber um outro tom de _backgroundColor_(larajinha) e um tom de branco no _color_ para mudar a cor da fonte também:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f0f0f0",

    fontSize: 40,

    textAlign: "center",

    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,

    borderWidth: 1,
    borderColor: "#888",
  },
  operationButton: {
    backgroundColor: "#fa8231",
    color: "#fff",
  }
})

export default Button;
```

- Em seguida vamos criar o objeto de estilo chamado botão duplo/_buttonDouble_ e nele iremos aplicar a propriedade largura/_width_ igual o tamanho da largura da tela divido por 4 e multiplicado por 2, para ocupar dois espaços de colunas:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f0f0f0",

    fontSize: 40,

    textAlign: "center",

    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,

    borderWidth: 1,
    borderColor: "#888",
  },
  operationButton: {
    backgroundColor: "#fa8231",
    color: "#fff",
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
})

export default Button;
```

- Vamos seguir a mesma lógica anterior para criar o objeto de estilo _buttonTriple_, o que mudará é que no final iremos multiplicar o resultado por 3:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f0f0f0",

    fontSize: 40,

    textAlign: "center",

    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,

    borderWidth: 1,
    borderColor: "#888",
  },
  operationButton: {
    backgroundColor: "#fa8231",
    color: "#fff",
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get("window").width / 4) * 3,
  },  
})

export default Button;
```

- Agora, dentro do componente _Button_ vamos criar uma constante chamada _stylesButton_ que irá receber o estilo inicial/padrão _button_ e apartir dele iremos aplicar os estilos de forma condicional caso as propriedades _double_ ou _tiple_ for passada:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  const stylesButton = [styles.button];

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  // [...]
})

export default Button;
```

- Então, se _double_ for passado via props, então a constante _stylesButton_ que é um array, irá receber também o _styles.buttonDouble_:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  const stylesButton = [styles.button];
  if(props.double) stylesButton.push(styles.buttonDouble);

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  // [...] 
})

export default Button;
```

- Seguindo a lógica aplicada anteriormente, iremos fazer a mesma válidação para a própriedade _triple_:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  const stylesButton = [styles.button];
  if(props.double) stylesButton.push(styles.buttonDouble);
  if(props.triple) stylesButton.push(styles.buttonTriple);

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  // [...] 
})

export default Button;
```

- E para finalizar essa parte de lógica na aplicação de estilos, seguindo a mesma ideia anterior vamos fazer a validação para verificar se a propriedade _operation_ está presente no botão:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  const stylesButton = [styles.button];
  if(props.double) stylesButton.push(styles.buttonDouble);
  if(props.triple) stylesButton.push(styles.buttonTriple);
  if(props.operation) stylesButton.push(styles.operationButton);

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  // [...]
})

export default Button;
```

- E vamos substituir a chamada direta para o objeto de estilo _styles.button_ no componente _Text_ para a constante _stylesButton_ para que a aplicação de estilo nos botões seja feita de forma condicional:

``` JSX
import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  const stylesButton = [styles.button];
  if(props.double) stylesButton.push(styles.buttonDouble);
  if(props.triple) stylesButton.push(styles.buttonTriple);
  if(props.operation) stylesButton.push(styles.operationButton);

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  // [...]
})

export default Button;
```

- Sabemos que precisamos passar um evento/parâmetro chamado _onClick_ para cada button e esse parâmetro vai receber uma função de acordo com o tipo do botão, por exemplo se for _AC_ vai receber uma função de limpar o display, se for uma operação vai receber uma função que irá efeturar a operação e assim sucessivamente.

Então, vamos voltar no componente _App_ vamos criar três funções... a primeira função vai se chamar _addDigit_ que vai receber o dígito _n_ e inicialmente vai chamar a função _setState_ e passar para ela como valor do _displayValue_ o digito _n_:

``` JSX
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Display from "./components/Display";

const App = () => { 

  const [state, setState] = useState({
    displayValue: "0",
  })

  const addDigit = (n) => {
    setState({ displayValue: n })
  }  

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" />
        // [...]
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // [...]
})

export default App;
```

- A segunda função vai se chamar _clearMemory_ que irá limpar o display, ou seja, vamos chamar a função _setState_ e zerar o valor de _displaValue_:

``` JSX
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Display from "./components/Display";

const App = () => { 

  const [state, setState] = useState({
    displayValue: "0",
  })

  const addDigit = (n) => {
    setState({ displayValue: n })
  }  

  const clearMemory = () => {
    setState({ displayValue: "0" })
  }

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" />
        // [...]
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // [...]
})

export default App;
```

- Por fim, a última função vai se chamar _setOperation_ e ela vai receber como parâmetro a operação/_operation_ e por enquanto ela vai ficar vazia:

``` JSX
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Display from "./components/Display";

const App = () => { 

  const [state, setState] = useState({
    displayValue: "0",
  })

  const addDigit = (n) => {
    setState({ displayValue: n })
  }  

  const clearMemory = () => {
    setState({ displayValue: "0" })
  }

  const setOperation = (operation) => {
    
  }

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" />
        // [...]
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // [...]
})

export default App;
```

- Agora, vamos passar para cada componente _Button_ os seus estilos(caso seja _double_ ou _triple_ ou _operation_) e a função/evento com seu respectivo parâmetro para a propriedade _onClick_:

``` JSX 
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Display from "./components/Display";

const App = () => { 

  const [state, setState] = useState({
    displayValue: "0",
  })

  const addDigit = (n) => {
    setState({ displayValue: n })
  }  

  const clearMemory = () => {
    setState({ displayValue: "0" })
  }

  const setOperation = (operation) => {

  }

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={() => setOperation("/")} /> 
        <Button label="7" onClick={() => addDigit(7)} /> 
        <Button label="8" onClick={() => addDigit(8)} />
        <Button label="9" onClick={() => addDigit(9)} />
        <Button label="*" operation onClick={() => setOperation("*")} />
        <Button label="4" onClick={() => addDigit(4)} />
        <Button label="5" onClick={() => addDigit(5)} />
        <Button label="6" onClick={() => addDigit(6)} />
        <Button label="-" operation onClick={() => setOperation("-")} />
        <Button label="1" onClick={() => addDigit(1)} />
        <Button label="2" onClick={() => addDigit(2)} />
        <Button label="3" onClick={() => addDigit(3)} />
        <Button label="+" operation onClick={() => setOperation("+")} />
        <Button label="0" double onClick={() => addDigit(0)} />
        <Button label="." onClick={() => addDigit(".")} />
        <Button label="=" operation onClick={() => setOperation("=")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // [...]
})

export default App;

// arrow funcion antes de passarmos a função para evitar o erro de "too many re-renders", pois se passarmos diretamente a função toda vez que o componente for renderizado ela será chamado, a arrow function evita isso, chamando a função apenas quando houver o evento que acione ela 
```

### Entendendo a Lógica da Calculadora