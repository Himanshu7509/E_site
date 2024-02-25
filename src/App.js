
import './App.css';
import { Fashion } from './Components/Fashion';


function App() {
  return (
    <>
      <header>
        <div className="Fnav">
          <ul>
            <li>Best Sellers</li>
            <li>Gift Ideas</li>
            <li>New Releases</li>
            <li>Today's Deals</li>
            <li>Customer Service</li>
          </ul>
        </div>
      </header>

      <div className="Bg">
        <div className="Box">
        <div className="H1">
          E_site
        </div>
        <div className="Con1">
          
        </div>
        </div>
      </div>

      <div className="con2">
        <div className="H2">
        <Fashion/>
        </div>

        <div className="CardCon">

          <div className="Card">
            <div className="H3">
            Woman Scart
            </div>
            <div className="H4">
              Price <span className="price">$40</span>
            </div>
            <img src="/images/women-clothes-img.png" alt="" className="Cardimg" />
            <div className="buy">
              <div className="L1">
                Buy Now
              </div>
              <div className="R1">
                See more
              </div>
            </div>
          </div>

          <div className="Card">
            <div className="H3">
            Men T-shirt
            </div>
            <div className="H4">
              Price <span className="price">$25</span>
            </div>
            <img src="/images/tshirt-img.png" alt="" className="Cardimg" />
            <div className="buy">
              <div className="L1">
                Buy Now
              </div>
              <div className="R1">
                See more
              </div>
            </div>
          </div>

          <div className="Card">
            <div className="H3">
            Men Shirt
            </div>
            <div className="H4">
              Price <span className="price">$30</span>
            </div>
            <img src="/images/dress-shirt-img.png" alt="" className="Cardimg" />
            <div className="buy">
              <div className="L1">
                Buy Now
              </div>
              <div className="R1">
                See more
              </div>
            </div>
          </div>

        </div>

        <div className="H2">
        Shoes for Mens and Womens
        </div>

        <div className="CardCon">

          <div className="Card">
            <div className="H3">
            Sneakers
            </div>
            <div className="H4">
              Price <span className="price">$1000</span>
            </div>
            <img src="/images/sneak.jpg" alt="" className="Cardimg" />
            <div className="buy">
              <div className="L1">
                Buy Now
              </div>
              <div className="R1">
                See more
              </div>
            </div>
          </div>

          <div className="Card">
            <div className="H3">
            Shoes
            </div>
            <div className="H4">
              Price <span className="price">$165</span>
            </div>
            <img src="/images/men-shoe.jpg" alt="" className="Cardimg" />
            <div className="buy">
              <div className="L1">
                Buy Now
              </div>
              <div className="R1">
                See more
              </div>
            </div>
          </div>

          <div className="Card">
            <div className="H3">
            Sport shoe for Womens
            </div>
            <div className="H4">
              Price <span className="price">$1130</span>
            </div>
            <img src="/images/women-shoes.jpg" alt="" className="Cardimg" />
            <div className="buy">
              <div className="L1">
                Buy Now
              </div>
              <div className="R1">
                See more
              </div>
            </div>
          </div>

        </div>

        <div className="H2">
        Electronic Products
        </div>

        <div className="CardCon">

          <div className="Card">
            <div className="H3">
            Laptop
            </div>
            <div className="H4">
              Price <span className="price">$100</span>
            </div>
            <img src="/images/laptop-img.png" alt="" className="Cardimg" />
            <div className="buy">
              <div className="L1">
                Buy Now
              </div>
              <div className="R1">
                See more
              </div>
            </div>
          </div>

          <div className="Card">
            <div className="H3">
            Smart-phones
            </div>
            <div className="H4">
              Price <span className="price">$65</span>
            </div>
            <img src="/images/mobile-img.png" alt="" className="Cardimg" />
            <div className="buy">
              <div className="L1">
                Buy Now
              </div>
              <div className="R1">
                See more
              </div>
            </div>
          </div>

          <div className="Card">
            <div className="H3">
            Computers
            </div>
            <div className="H4">
              Price <span className="price">$130</span>
            </div>
            <img src="/images/computer-img.png" alt="" className="Cardimg" />
            <div className="buy">
              <div className="L1">
                Buy Now
              </div>
              <div className="R1">
                See more
              </div>
            </div>
          </div>

        </div>

        <div className="H2">
        Jewellery Accessories
        </div>

        <div className="CardCon">

          <div className="Card">
            <div className="H3">
            Jumkas
            </div>
            <div className="H4">
              Price <span className="price">$400</span>
            </div>
            <img src="/images/jhumka-img.png" alt="" className="Cardimg" />
            <div className="buy">
              <div className="L1">
                Buy Now
              </div>
              <div className="R1">
                See more
              </div>
            </div>
          </div>

          <div className="Card">
            <div className="H3">
            Necklaces
            </div>
            <div className="H4">
              Price <span className="price">$625</span>
            </div>
            <img src="/images/neklesh-img.png" alt="" className="Cardimg" />
            <div className="buy">
              <div className="L1">
                Buy Now
              </div>
              <div className="R1">
                See more
              </div>
            </div>
          </div>

          <div className="Card">
            <div className="H3">
            Kangans
            </div>
            <div className="H4">
              Price <span className="price">$300</span>
            </div>
            <img src="/images/kangan-img.png" alt="" className="Cardimg" />
            <div className="buy">
              <div className="L1">
                Buy Now
              </div>
              <div className="R1">
                See more
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer>
        <div className="H5">
        E_site
        </div>
        <div className="Emailpart">
          <label htmlFor="email" className='C1'>Your Email</label>
          <input type="email"  className="Epart" />
          <label htmlFor="subscribe" className='C1'>SUBSCRIBE</label>
        </div>
        <div className="Snav">
          <ul>
            <li className="List">Best Sellers</li>
            <li className="List">Gift Ideas</li>
            <li className="List">New Releases</li>
            <li className="List">Today's Deals</li>
            <li className="List">Customer Service</li>
          </ul>
        </div>
        <div className="C2">
        Help Line Number : +1 1800 1200 1200
        </div>
        <div className="C3">
        © 2020 All Rights Reserved. Design by HDT
        </div>
      </footer>
    </>
  );
}

export default App;
