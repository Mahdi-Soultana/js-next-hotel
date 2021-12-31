import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* ///initialisation code external library here !!  */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          />

          <meta
            name="description"
            content="
        Hey 👋 I' MahdiSoultana,Mahdi-Soultana a  web developer   by ReactJs / NodeJS  JavaScript HTML CSS :
        you can checkout my project here on upwork or see my portfolio !
        https://github.com/Mahdi-Soultana
        https://www.linkedin.com/in/mahdisoultana/
        https://twitter.com/mahdi_soultana
        https://www.upwork.com/freelancers/~01c3b60e1c04398fd9
        skype Id: live:.cid.4c11f2bc899ffbc0
        Thank you very much for your interest and I hope to start solving your problem right now 😊"
          />
          <meta
            name="keywords"
            content="mahdisoultana mahdi_soultana Mahdi-Soultana MahdiSoultana  web developer   by ReactJs / NodeJS  JavaScript HTML CSS"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* ///initialisation code external library here !!  */}
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
            integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
