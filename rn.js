

function ComponenteFuncionalSimples(props) {
  // Estado interno (simulado usando um objeto simples)
  let state = {};
  let setStateQueue = [];
  let isUpdating = false;

  // Função para obter o estado atual
  const getState = () => {
    return { ...state };
  };

  // Função para atualizar o estado (simula o setState)
  const setState = (newStateOrFn, callback) => {
    setStateQueue.push({ update: newStateOrFn, callback });
    if (!isUpdating) {
      processStateQueue();
    }
  };

  const processStateQueue = () => {
    isUpdating = true;
    let nextState = { ...state };
    let finalCallback;

    while (setStateQueue.length > 0) {
      const { update, callback } = setStateQueue.shift();
      const newState = typeof update === 'function' ? update(nextState) : update;
      nextState = { ...nextState, ...newState };
      finalCallback = callback;
    }

    if (JSON.stringify(state) !== JSON.stringify(nextState)) {
      console.log(`[${ComponenteFuncionalSimples.name}] Estado atualizado:`, nextState, "com props:", props);
      state = nextState;
      // Simula a re-renderização (apenas loga, sem DOM real)
      render(props, getState);
    }

    if (finalCallback) {
      finalCallback();
    }
    isUpdating = false;
  };

  // Simula o "render" do componente funcional
  const render = (currentProps, getCurrentState) => {
    console.log(`[${ComponenteFuncionalSimples.name}] Renderizando com props:`, currentProps, "e state:", getCurrentState());
    // Em um componente React real, aqui retornaríamos elementos JSX
  };

  // Chamada inicial de "render"
  render(props, getState);

  // Retorna um objeto com as funcionalidades que queremos expor
  return {
    props: props,
    state: getState,
    setState: setState
  };
}

// Exemplo de uso do componente funcional simulado
function MeuComponenteFuncional(props) {
  // Simula a declaração de estado usando o nosso setState simulado
  const { state, setState } = ComponenteFuncionalSimples(props);

  // Simula um efeito colateral (semelhante ao useEffect sem dependências)
  if (!MeuComponenteFuncional.isMounted) {
    console.log(`[${MeuComponenteFuncional.name}] Montou! Props iniciais:`, props, "e estado inicial:", state());
    MeuComponenteFuncional.isMounted = true;

    // Simula uma atualização de estado após um tempo
    setTimeout(() => {
      setState({ contador: state().contador + 1 });
    }, 1000);

    setTimeout(() => {
      setState(prevState => ({ mensagem: prevState.mensagem + " (atualizado!)" }));
    }, 2000);
  }

  // Função para manipular um evento e atualizar o estado
  const incrementarContador = () => {
    setState({ contador: state().contador + 1 });
  };

  // Função para atualizar a mensagem
  const atualizarMensagem = (novaMensagem) => {
    setState({ mensagem: novaMensagem });
  };

  console.log(`[${MeuComponenteFuncional.name}] Executando a lógica do componente com props:`, props, "e estado:", state());

  // Simula o retorno de JSX (apenas logs)
  console.log(`[${MeuComponenteFuncional.name}] Conteúdo simulado:`);
  console.log(`  - Props:`, props);
  console.log(`  - State:`, state());
  console.log(`  - Contador:`, state().contador);
  console.log(`  - Mensagem:`, state().mensagem);

  return {
    incrementarContador,
    atualizarMensagem,
    props: props,
    state: state
  };
}
