var quotes = [
  [
    "It’s your place in the world, it’s your life. Go on and do all you can with it, and make it the life you want to live.",
    "Mae Jemison"
  ],
  [
    "You may be disappointed if you fail, but you are doomed if you don’t try.",
    "Beverly Sills"
  ],
  [
    "Remember no one can make you feel inferior without your consent.",
    "Eleanor Roosevelt"
  ],
  [
    "Life is what we make it, always has been, always will be.",
    "Grandma Moses"
  ],
  [
    "The question isn’t who is going to let me; it’s who is going to stop me.",
    "Ayn Rand"
  ],
  [
    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    "Henry Ford"
  ],
  [
    "It’s not the years in your life that count. It’s the life in your years.",
    "Abraham Lincoln"
  ],
  ["Change your thoughts and you change your world.", "Norman Vincent Peale"],
  [
    "Either write something worth reading or do something worth writing.",
    "Benjamin Franklin"
  ],
  [
    "Nothing is impossible, the word itself says, “I’m possible!”",
    "–Audrey Hepburn"
  ],
  [
    "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
    "Jamie Paolinetti"
  ],
  [
    "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    "Erica Jong"
  ],
  [
    "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    "Bob Dylan"
  ],
  [
    "I didn’t fail the test. I just found 100 ways to do it wrong.",
    "Benjamin Franklin"
  ],
  [
    "In order to succeed, your desire for success should be greater than your fear of failure.",
    "Bill Cosby"
  ],
  [
    "A person who never made a mistake never tried anything new.",
    " Albert Einstein"
  ],
  [
    "The person who says it cannot be done should not interrupt the person who is doing it.",
    "Chinese Proverb"
  ],
  ["There are no traffic jams along the extra mile.", "Roger Staubach"],
  ["It is never too late to be what you might have been.", "George Eliot"],
  ["You become what you believe.", "Oprah Winfrey"],
  ["I would rather die of passion than of boredom.", "Vincent van Gogh"],
  [
    "A truly rich man is one whose children run into his arms when his hands are empty.",
    "Unknown"
  ],
  [
    "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
    "Ann Landers"
  ],
  [
    "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
    "Abigail Van Buren"
  ],
  [
    "Build your own dreams, or someone else will hire you to build theirs.",
    "Farrah Gray"
  ],
  [
    "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
    "Jesse Owens"
  ],
  ["Education costs money.  But then so does ignorance.", "Sir Claus Moser"],
  [
    "I have learned over the years that when one’s mind is made up, this diminishes fear.",
    "Rosa Parks"
  ],
  [
    "It does not matter how slowly you go as long as you do not stop.",
    "Confucius"
  ]
];

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0],
      darkMode: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      darkMode: !this.state.darkMode
    });
  }

  returnQuote() {
    let key = Math.floor(Math.random() * 10);
    return quotes[key];
  }
  handleClick() {
    const randomQuote = this.returnQuote();
    this.setState({
      quote: randomQuote
    });
  }

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  render() {
    let modeClass = this.state.darkMode ? "dark-mode" : "light-mode";
    let checked = this.state.darkMode ? "checked" : "unchecked";

    return (
      <>
        <div className={`box content ${modeClass}`} id="quote-box">
          <p>
            {" "}
            {
              <QuoteChild
                displayColor={this.randomColor}
                handleClick={this.handleClick}
                {...this.state}
              />
            }
          </p>
          <label className="checkbox">
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={this.handleChange}
            />{" "}
            Dark Mode
          </label>
        </div>
      </>
    );
  }
}

class QuoteChild extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div>
        <h1 id="text" style={{color:randomColor}}>{this.props.quote[0]}</h1>
        <h5 id="author" style={{color:randomColor}}>
          -{this.props.quote[1] ? this.props.quote[1] : "Unknown"}-
        </h5>
        <div class="buttons">
          <a style={{background:randomColor}}
            class="button"
            id="tweet-quote"
            title="tweet this quote!"
            target="top"
            href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22If%20you%20do%20what%20you%E2%80%99ve%20always%20done%2C%20you%E2%80%99ll%20get%20what%20you%E2%80%99ve%20always%20gotten.%22%20Tony%20Robbins"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="button"
            id="tumblr-quote"
            target="_blank"
            href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DTony%2BRobbins%26content%3DIf%2Byou%2Bdo%2Bwhat%2Byou%25E2%2580%2599ve%2Balways%2Bdone%252C%2Byou%25E2%2580%2599ll%2Bget%2Bwhat%2Byou%25E2%2580%2599ve%2Balways%2Bgotten.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
          >
            <i className="fa fa-tumblr"></i>
          </a>
          <button
            className="button"
            id="new-quote"
            onClick={this.props.handleClick}
            style={{background:randomColor}}
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

const el = document.querySelector("#root");
ReactDOM.render(<RandomQuoteMachine title="qotd" />, el);
