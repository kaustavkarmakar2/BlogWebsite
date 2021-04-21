import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <article className="overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 font-weight-bold">Blogs</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-4 pb-5">
              <p className="lead">Blogging Website</p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://www.pexels.com/photo/charming-hovawart-resting-on-crumpled-plaid-near-laptop-in-bedroom-4297825/" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Keep Cool</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/react">
                    <a>
                      <h3 className="h1">Keep blogging6</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://www.pexels.com/photo/woman-in-white-dress-sitting-on-mans-lap-7537816/" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Keep Visiting</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/node">
                    <a>
                      <h3 className="h1">Keep posting</h3>
                    </a>
                  </Link>
                  <p className="lead"></p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://www.pexels.com/photo/woman-in-black-skirt-and-white-shirt-standing-beside-woman-in-black-dress-7391051/" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Keep exporing</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/nextjs">
                    <a>
                      <h3 className="h1">Keep Visiting</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
