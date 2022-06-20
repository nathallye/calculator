# Projeto Calculadora(Calculator)

![image](https://user-images.githubusercontent.com/86172286/174512763-41d33bda-6f7e-43d2-999e-746e889a8a98.jpg)

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

### Lógica da Calculadora #01

- Iremos, criar o estado inicial para depois manipularmos. Fora do componente, vamos definir uma constante _initialState_ que vai receber as seguintes propriedades:
_displayValue_ vai ser o valor a ser exibido no display da calculadora;
_clearDisplay_ propriedade que vai informar se precisa ou não limpar o display, inicialmente vai começar com o valor booleano _false_;
_operation_ variável que vai armazenar a operação corrente, vai iniciar como _null_;
_values_ array com dois valores, pois no momento que colocamos o valor e em seguida clicamos na operação ele armazena esse valor na primeira posição do array, na próxima vez ele vai limpar o display e vai armazenar o próximo valor na segunda posição do array;
_current_ propriedade para verificar se estamos manipulando value de indice 0 do array ou o value de indice 1, vai iniciar com o valor _0_:

``` JSX
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Display from "./components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

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

- Criamos essa constante _initialState_, pois a função _clearMemory_ vai chamar ela e voltar o display ao estado inicial, além de que o _state_ vai fazer um clone desse objeto. Por isso, foi criada de forma separada para não ser alterada diretamente.
Então, dentro do componente vamos mudar objeto _state_ para o seu valor inicial receber tudo que a variável _inicialState_ possui dentro dela(operador spred cria um clone desse objeto):

``` JSX
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Display from "./components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState })

  // [...]

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- Além de que, caso a função _clearMemory_ seja invocada vai chamar a função _setState_ e atribuir os valores de _initialState_, voltando o estado para o inicio:

``` JSX
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Display from "./components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState })

  // [...]

  const clearMemory = () => {
    setState({ ...initialState });
  }

  // [...]

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- Agora, vamos implementar condicionais na função _addDigit_.
Se a calculadora receber um digito ponto "."(n === ".") e o valor que está no display(state.displayValue) já contém um ponto(includes(".")), significa que **não podemos adicionar um segundo ponto nesse número**, essa tentativa vai ser ignorada e o código vai seguir(return):

``` JSX
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Display from "./components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState })

  const addDigit = (n) => {
    if (n === "." && state.displayValue.includes(".")) {
      return
    }
  }

  // [...]

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- O próximo passo dentro da função _addDigit_ é criar uma variável chamada _clearDisplay_.
A constante _clearDisplay_ vai ter dois cenários. O primeiro cenário vai ser quando o display conter apenas o digito 0, pois a medida que adicionarmos o digito diferente de 0 vai limpar o display e ir concatenando os digitos. A segunda situação é quando a variável _clearDisplay_ do objeto _state_(que clonou o objeto initialState) for verdadeira/_true_:

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState })

  const addDigit = (n) => {
    if (n === "." && state.displayValue.includes(".")) {
      return
    }

    const clearDisplay = state.displayValue === "0"
      || state.clearDisplay // a constante vai receber um valor booleano, se o valor no display for igual a 0(true); OU o valor da variável clearDisplay do objeto state for true... clearDisplay vai ser true, caso nenhuma das condições seja true, vai receber false
  }

  // [...]

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- O próximo passo, é criar uma constante chamada _currentValue_ e ela vai depender da variável _clearDisplay_(vai depender se o display vai ser limpo ou não).
Se o display for ser limpo, ou seja, **_clearDisplay_ for true** então(?) o valor **_currentValue_ vai ser uma string vazia**. Se o display não for ser limpo (senão :), ou seja, **_clearDisplay_ for false**, a constante **_currentValue_ vai receber o valor atual que está no display(state.displayValue)**. Vamos usar o operador ternário:

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState })

  const addDigit = (n) => {
    if (n === "." && state.displayValue.includes(".")) {
      return
    }

    const clearDisplay = state.displayValue === "0"
      || state.clearDisplay

    const currentValue = clearDisplay ? '' : state.displayValue;
  }

  // [...]

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- A próxima constante a ser criada vai ser o novo valor que vamos colocar no display, ela vai ser chamada de _displayValue_ que **vai receber o _currentValue_ + o digito _n_** que for clicado:

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState })

  const addDigit = (n) => {
    if (n === "." && state.displayValue.includes(".")) {
      return
    }

    const clearDisplay = state.displayValue === "0"
      || state.clearDisplay

    const currentValue = clearDisplay ? '' : state.displayValue;

    const displayValue = currentValue + n; // como são duas strings ele vai apenas concatenar e não somar
  }

  // [...]

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- Agora, o próximo passo é mudarmos o estado da aplicação, por hora quando clicamos nos digitos não ocorre nada no valor do display, portanto vamos chamar a função _setState_ e passar como valores para _displayValue_ a constante com o mesmo nome _displayValue_ e o _clearDisplay_ recebendo _false_(pois uma vez que digitamos o valor e já limpamos o display com a variável clearDisplay igual a true, alteramos clearDisplay para false):

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState })

  const addDigit = (n) => {
    if (n === "." && state.displayValue.includes(".")) {
      return
    }

    const clearDisplay = state.displayValue === "0"
      || state.clearDisplay

    const currentValue = clearDisplay ? '' : state.displayValue;

    const displayValue = currentValue + n;

    setState({ ...state, displayValue, clearDisplay: false }); // Aqui receberia CHAVE: VALOR => setState({ displayValue: newDisplayValue, ...}); Mas colocamos a chave com o mesmo valor que está dentro do state que quando passarmos para o setState usamos apenas o nome do atributo que já reflete no nome da chave que é o mesmo;
  }

  // [...]

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- O próximo passo é inserirmos uma condicional para que sempre que for digitado um valor diferente de ponto, ou seja, um número. Queremos armazenar esse número digitado no array _values_ do objeto _state_, só que o valor que contém no _displayValue_ é uma string, e iremos armazenar no array como float.
Então, dentro da condicional if se for digitado qualquer valor diferente de ponto, vai ser armazenado na contante _newValue_ a conversão do valor _displayValue_(contém o valor do valor corrente do display + valor n que foi recebido na função) em float:

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState })

  const addDigit = (n) => {
    if (n === "." && state.displayValue.includes(".")) {
      return
    }

    const clearDisplay = state.displayValue === "0"
      || state.clearDisplay
    const currentValue = clearDisplay ? '' : state.displayValue;
    const displayValue = currentValue + n;

    setState({ ...state, displayValue, clearDisplay: false });

    if(n !== ".") {
      const newValue = parseFloat(displayValue);
    }
  }

  // [...]

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- Desse modo, podemos criar uma nova constante chamada _values_ que vai receber o clone do array values do objeto state. Para ao invés de atualizar diretamente o array que está no estado, gerar um novo array e atualizar o estado com o novo array:

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState })

  const addDigit = (n) => {
    if (n === "." && state.displayValue.includes(".")) {
      return
    }

    const clearDisplay = state.displayValue === "0"
      || state.clearDisplay
    const currentValue = clearDisplay ? '' : state.displayValue;
    const displayValue = currentValue + n;

    setState({ ...state, displayValue, clearDisplay: false });

    if(n !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...state.values];
    }
  }

  // [...]

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- Assim, podemos fazer com que o array _values_ receba os valores de acordo com o indice(_current_):

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState })

  const addDigit = (n) => {
    if (n === "." && state.displayValue.includes(".")) {
      return
    }

    const clearDisplay = state.displayValue === "0"
      || state.clearDisplay
    const currentValue = clearDisplay ? '' : state.displayValue;
    const displayValue = currentValue + n;

    setState({ ...state, displayValue, clearDisplay: false });

    if(n !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...state.values];
      values[state.current] = newValue;
    }
  }

  // [...]

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- Por fim, uma vez que mudamos os valores do array, vamos adicionar esse array no estado do objeto:

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState })

  const addDigit = (n) => {
    if (n === "." && state.displayValue.includes(".")) {
      return
    }

    const clearDisplay = state.displayValue === "0"
      || state.clearDisplay
    const currentValue = clearDisplay ? '' : state.displayValue;
    const displayValue = currentValue + n;
    setState({ ...state, displayValue, clearDisplay: false });

    if(n !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...state.values];
      values[state.current] = newValue;

      setState({ ...state, displayValue, values }); // mesma coisa que ({ values: values }) já que a constante que criamos tem o mesmo nome do atributo que está dentro do objeto state
    }
  }

  // [...]

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

### Lógica da Calculadora #02

- Por hora, nossa calculadora só está armazenado o valor do índice 0 do array values. Agora vamos implementar a segunda parte da lógica, para que quando clicarmos na operação temos que passar a armazenar os valores no índice 1 do array.
Primeiramente, **na função _setOperation_ se o valor _current_ for igual a 0 temos que mudá-lo para 1, para começarmos a mexer no segundo valor do array**.
Além disso, temos que **mudar a variável _clearDisplay_ para true, para que o display seja limpo**, pois depois que setarmos uma operação, os próximos digitos já vão pertencer a outro valor.
O **terceiro valor que precisamos alterar o estado é a _operation_ que vamos receber nessa função _setOperation_**:

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState });

  // [...]

  const setOperation = (operation) => {
    if (state.current === 0) { // quando essa função for acionada e recebermos a operação, se o current for igual a 0
      setState({ operation, current: 1, clearDisplay: true }) // vamos mudar o estado da operação mandando o valor atual(poderia ser assim ({ operation: operation, ... })), o current passar a ser 1 e o clearDisplay true
    }
  }

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- Agora, na próxima vez que clicarmos no igual ou em outra operação, significa que ele vai pegar esses dois valores, processar, gerar o resultado e armazená-lo no primeiro elemento do array(índice 0), limpa o elemento de índice 1 para ficar livre para receber outro valor
Quando clicamos em uma operação, a função _setOperation_ é chamada e caso não estivermos mexendo no primeiro elemento do array(índice 0), vamos criar a lógica para concluir a operação(else):

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState });

  // [...]

  const setOperation = (operation) => {
    if (state.current === 0) { // quando essa função for acionada e recebermos a operação, se o current for igual a 0
      setState({ operation, current: 1, clearDisplay: true }) // vamos mudar o estado da operação mandando o valor atual(poderia ser assim ({ operation: operation, ... })), o current passar a ser 1 e o clearDisplay true
    } else { // se o current não for igual a 0, significa que a operação vai ser concluida

    }
  }

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- E dentro do else vamos gerar o resultado, caso o usuário clique no operador "=". Para isso, vamos criar uma constante chamada _equals_ que vai receber o valor true caso o operador que o usuário clicou seja igual a "=":

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState });

  // [...]

  const setOperation = (operation) => {
    if (state.current === 0) {
      setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === "="; // essa constante vai receber uma valor booleano, caso a comparação se verdadeira irá receber true, caso constrario false
    }
  }

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- Outro caso a ser tratado é quando já temos o v1, a operação e o v2, e ao invés de clicarmos no igual para finalizar a operação, clicarmos em outro operador. Portanto, os dois primeiros valores e a sua respectiva operação vão ter que ser processados e armazenado o resultado no índice 0.
O primeiro ponto que devemos dar atenção, é quando clicamos na operação, sabemos que ela chama a função _setOperation_ e armazena a operação, mas como já temos a operação anterior, nesse caso precisamos pegar essa operation já armazenada. Para isso, vamos salvar ela em uma constante chamada _currentOperation_:

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState });

  // [...]

  const setOperation = (operation) => {
    if (state.current === 0) {
      setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === "=";
      currentOperation = state.operation;

    }
  }

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- E agora vamos criar **um clone do array atual values em uma variável chamada _values_** e em **seguida fazer o calculo do valor "em cima" da função _eval_**(A função eval() computa um código JavaScript representado como uma string) **e inserir na primeira posição desse novo array**.
Vamos usar a função _eval_, mas também poderiamos usar um switch case ou if else de acordo com a operação digitada, mas para evitar o código ficar muito grande podemos usar essa função. E para evitarmos a advertência que o React a respeito do uso da função _eval_, para capturar os erros podemos usar o _try catch_.
Além disso, não podemos esquecer que o resultado dessa operação deve ser armazenado na posição de índice 0 desse array, e a posição de índice 1 deve ser zerada:

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState });

  // [...]

  const setOperation = (operation) => {
    if (state.current === 0) {
      setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === "=";
      currentOperation = state.operation;

      const values = [ ...state.values ]
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch(e) {
        values[0] = state.values[0]; // se der um erro vamos pegar o valor atual do estado
      }

      values[1] = 0;
    }
  }

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

- E para que tudo isso reflita no estado da aplicação, vamos chamar a função _setState_ e passar os novos valores.
O _displayValue_ vai receber o valor do índice 0, para exibir no display o resultado da primeira operação;
Já o _operation_ se for "="(equals true) a operation vai receber null, ou seja, essa operação vai ser concluida, se não(vai ser outra operação) operation vai receber a nova operação;
O valor _current_ se o usuário clicou no "="(equals true) vai continuar com o índice 0, senão(no caso vai ser outra operação) o usuário vai passar a mexer no índice 1;
Outro ponto é, se o usuário clicou em "="(equals true) não vai precisar limpar o display(clearDisplay: false), só vai ser necessário limpar o display se for outra operação(ou seja, diferente de equal);
Por fim, precisamos passar o array values para alterar o seu estado:

``` JSX
import React, { useState } from "react";
// [...]

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const App = () => {

  const [state, setState] = useState({ ...initialState });

  // [...]

  const setOperation = (operation) => {
    if (state.current === 0) {
      setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === "=";
      currentOperation = state.operation;

      const values = [ ...state.values ]
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch(e) {
        values[0] = state.values[0]; // se der um erro vamos pegar o valor atual do estado
      }

      values[1] = 0;

      setState({
        ...state,
        displayValue: `${values[0]}`, // para garantir que sempre values seja uma string
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        // clearDisplay: !equals, // se for diferente de equal retorna true, se for igual retorna false
        clearDisplay: true,
        values
      });
    }
  }

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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

### Corrigindo problema de ponto flutuante

- Para isso, vamos adicionar a verificação depois da verificação se é necessário limpar o display ou não, e incluir mais uma validação para que só cai no if se n for igual a zero e clearDisplay for diferente de true:

``` JSX
import React, { useState } from "react";
// [...]

const App = () => {

  const [state, setState] = useState({ ...initialState });

  const addDigit = (n) => {
    const clearDisplay = state.displayValue === "0"
      || state.clearDisplay
    const currentValue = clearDisplay ? "" : state.displayValue;
    const displayValue = currentValue + n;

    if (n === "." && !clearDisplay
      && state.displayValue.includes(".")) {
      return
    }

    setState({ ...state, displayValue, clearDisplay: false });

    if(n !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...state.values];
      values[state.current] = newValue;

      setState({ ...state, displayValue, values });
    }
  }

  // [...]

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
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
