fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
  .then(result => result.json())
  .then((episodes) => {

    let totalepisodes = (episodes._embedded.episodes)
    function Title(props) {
      return React.createElement('h1', { className: 'root', title: props.title }, `${props.title}`)
    }

    function Paragraph(props) {
      return React.createElement('p', { className: 'root', parrafo: props.parrafo }, `${props.parrafo}`)
    }

    function image(props) {
      return React.createElement('img', { className: 'image', src: props.src })
    }

function addLi() {
  let contenido;
  for (i = 0; i < totalepisodes.length; i++) {
    return React.createElement('div', { className: 'card col-sm-12 col-md-4' }, [
          React.createElement(image, { src: totalepisodes[i].image.medium }),
          React.createElement(Paragraph, { parrafo: totalepisodes[i].name }),
          React.createElement(Title, { title: totalepisodes[i].name }),
    ]);
    let p = document.createElement("p");
    contenido = totalepisodes[i].name ;
    p.appendChild(document.createTextNode(contenido));
    document.querySelector("#root").appendChild(p);
  }
}

    ReactDOM.render(
      React.createElement('div', { className: 'container' }, [
        React.createElement('div', { className: 'row' }, [
          React.createElement(addLi),
        ]),
      ]),
      document.getElementById('root')
    )
  })



