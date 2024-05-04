import React from "react";
import "./Footer.css";
const Footer = () => {
  let footerItems = [
    {
      svg: (
        <svg
          width="55"
          height="60"
          viewBox="0 0 55 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="null"
          class="img-fluid w-100 svg replaced-svg"
        >
          <path
            d="M24.0012 29.6985V44.9992C24.0012 45.7949 24.3173 46.558 24.88 47.1207C25.4426 47.6833 26.2057 47.9994 27.0014 47.9994C27.7971 47.9994 28.5602 47.6833 29.1228 47.1207C29.6854 46.558 30.0015 45.7949 30.0015 44.9992V29.6985C33.6438 28.955 36.8804 26.8855 39.0836 23.8914C41.2868 20.8972 42.2998 17.1917 41.9262 13.4931C41.5525 9.79446 39.8189 6.36634 37.0614 3.87333C34.3038 1.38031 30.7188 0 27.0014 0C23.284 0 19.699 1.38031 16.9414 3.87333C14.1839 6.36634 12.4502 9.79446 12.0766 13.4931C11.7029 17.1917 12.7159 20.8972 14.9192 23.8914C17.1224 26.8855 20.3589 28.955 24.0012 29.6985ZM27.0014 5.99724C28.7815 5.99724 30.5217 6.52511 32.0018 7.5141C33.4819 8.50308 34.6355 9.90876 35.3167 11.5534C35.9979 13.198 36.1762 15.0077 35.8289 16.7536C35.4816 18.4995 34.6244 20.1033 33.3657 21.362C32.1069 22.6207 30.5032 23.4779 28.7573 23.8252C27.0114 24.1725 25.2017 23.9943 23.5571 23.313C21.9124 22.6318 20.5068 21.4782 19.5178 19.9981C18.5288 18.518 18.0009 16.7778 18.0009 14.9977C18.0009 12.6106 18.9492 10.3213 20.6371 8.63342C22.325 6.94551 24.6143 5.99724 27.0014 5.99724ZM39.632 37.2588C39.238 37.1761 38.8316 37.1718 38.436 37.2461C38.0403 37.3204 37.6632 37.472 37.3261 37.6921C36.989 37.9122 36.6985 38.1965 36.4713 38.5288C36.2441 38.8611 36.0846 39.235 36.0018 39.629C35.9191 40.0229 35.9148 40.4294 35.9891 40.825C36.0634 41.2207 36.215 41.5978 36.4351 41.9349C36.6552 42.272 36.9395 42.5625 37.2718 42.7897C37.6041 43.0169 37.978 43.1764 38.372 43.2591C45.1823 44.6092 48.0025 47.0393 48.0025 47.9994C48.0025 49.7395 40.6521 53.9997 27.0014 53.9997C13.3507 53.9997 6.00031 49.7395 6.00031 47.9994C6.00031 47.0393 8.82045 44.6092 15.6308 43.1391C16.0248 43.0564 16.3986 42.8969 16.7309 42.6697C17.0633 42.4425 17.3476 42.152 17.5677 41.8149C17.7878 41.4778 17.9393 41.1007 18.0136 40.705C18.088 40.3094 18.0837 39.9029 18.0009 39.509C17.9182 39.115 17.7587 38.7411 17.5314 38.4088C17.3042 38.0765 17.0138 37.7921 16.6767 37.5721C16.3396 37.352 15.9625 37.2004 15.5668 37.1261C15.1711 37.0518 14.7647 37.0561 14.3707 37.1388C5.25027 39.2389 0 43.1691 0 47.9994C0 55.8898 13.5907 60 27.0014 60C40.4121 60 54.0028 55.8898 54.0028 47.9994C54.0028 43.1691 48.7525 39.2389 39.632 37.2588Z"
            fill="#02050A"
          ></path>
        </svg>
      ),
      title: "Address",
      li: <li><a href="">2118 Thornridge Cir. Syracuse, Connecticut 35624</a></li>,
    },
    {
      svg: (
        <svg
          width="61"
          height="60"
          viewBox="0 0 61 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="null"
          class="img-fluid w-100 svg replaced-svg"
        >
          <path
            d="M52.4134 33.1202C51.7509 33.1202 51.0584 32.9094 50.396 32.7589C49.0557 32.4591 47.7378 32.0668 46.4517 31.5846C45.0549 31.0764 43.5195 31.1028 42.141 31.6587C40.7625 32.2145 39.6383 33.2606 38.9846 34.5955L38.3222 35.9805C35.3981 34.3221 32.6967 32.2986 30.2831 29.9587C27.9431 27.5451 25.9196 24.8437 24.2612 21.9195L25.6462 21.2872C26.9812 20.6336 28.0272 19.5094 28.5831 18.1309C29.1389 16.7523 29.1653 15.2169 28.6572 13.8201C28.179 12.5225 27.7867 11.1949 27.4829 9.84572C27.3324 9.18332 27.2119 8.49081 27.1216 7.8284C26.756 5.70757 25.6451 3.78697 23.9891 2.41247C22.3331 1.03798 20.2407 0.299914 18.0888 0.331201H9.02594C7.75306 0.329534 6.4942 0.59691 5.33189 1.1158C4.16958 1.63469 3.13005 2.39338 2.28147 3.34213C1.41529 4.31662 0.770332 5.46709 0.39092 6.71447C0.0115073 7.96185 -0.0933695 9.27659 0.0834945 10.5683C1.72019 23.1002 7.44584 34.742 16.3726 43.6885C25.3191 52.6153 36.9609 58.3409 49.4928 59.9776C49.8836 60.0075 50.2762 60.0075 50.667 59.9776C52.8873 59.9809 55.031 59.1662 56.6889 57.6893C57.6376 56.8407 58.3963 55.8012 58.9152 54.6389C59.4341 53.4766 59.7015 52.2177 59.6998 50.9448V41.9121C59.6836 39.8316 58.9496 37.8206 57.6221 36.2187C56.2945 34.6168 54.4546 33.5223 52.4134 33.1202ZM53.8887 51.1857C53.8877 51.6059 53.7988 52.0212 53.6277 52.4049C53.4566 52.7886 53.207 53.1323 52.8951 53.4138C52.5651 53.7144 52.1724 53.938 51.7454 54.0681C51.3184 54.1983 50.8677 54.2319 50.4261 54.1665C39.1902 52.6991 28.7482 47.5786 20.7083 39.5937C12.6615 31.5469 7.49648 21.0685 6.01502 9.7855C5.94961 9.3439 5.98321 8.89329 6.1134 8.46627C6.24358 8.03926 6.46709 7.64654 6.76775 7.31655C7.05264 7.00085 7.40118 6.74909 7.7904 6.57783C8.17963 6.40657 8.60071 6.3197 9.02594 6.32294H18.0587C18.7547 6.30593 19.4351 6.53065 19.9841 6.95885C20.5331 7.38704 20.9167 7.99225 21.0696 8.67146C21.0696 9.48441 21.3406 10.3275 21.5213 11.1404C21.8693 12.7177 22.3322 14.2675 22.9063 15.7772L18.691 17.7645C17.9665 18.097 17.4034 18.7034 17.1253 19.4506C16.8242 20.1836 16.8242 21.0058 17.1253 21.7389C21.4586 31.0208 28.9198 38.482 38.2018 42.8153C38.9348 43.1165 39.757 43.1165 40.4901 42.8153C41.2372 42.5373 41.8436 41.9742 42.1762 41.2497L44.0731 37.0344C45.6265 37.6008 47.2157 38.0635 48.8304 38.4194C49.6132 38.6 50.4563 38.7506 51.2692 38.871C51.9484 39.024 52.5536 39.4076 52.9818 39.9566C53.41 40.5055 53.6347 41.1859 53.6177 41.882L53.8887 51.1857ZM36.1243 0C35.4317 0 34.7091 0 34.0166 0C33.2181 0.0678765 32.4792 0.450194 31.9625 1.06285C31.4459 1.6755 31.1937 2.46831 31.2616 3.26685C31.3295 4.0654 31.7118 4.80428 32.3245 5.32094C32.9371 5.8376 33.7299 6.08972 34.5285 6.02185H36.1243C40.9155 6.02185 45.5106 7.92518 48.8985 11.3131C52.2865 14.7011 54.1898 19.2961 54.1898 24.0874C54.1898 24.6294 54.1898 25.1412 54.1898 25.6832C54.123 26.4775 54.374 27.2659 54.8876 27.8754C55.4012 28.485 56.1356 28.866 56.9297 28.935H57.1706C57.9244 28.938 58.6518 28.6583 59.2093 28.151C59.7668 27.6437 60.1137 26.9457 60.1815 26.195C60.1815 25.5025 60.1815 24.7799 60.1815 24.0874C60.1815 17.7042 57.6479 11.5821 53.1372 7.06567C48.6264 2.54927 42.5074 0.00797895 36.1243 0ZM42.1461 24.0874C42.1461 24.8859 42.4633 25.6518 43.028 26.2164C43.5926 26.7811 44.3585 27.0983 45.157 27.0983C45.9556 27.0983 46.7214 26.7811 47.2861 26.2164C47.8507 25.6518 48.168 24.8859 48.168 24.0874C48.168 20.8932 46.8991 17.8298 44.6404 15.5712C42.3818 13.3126 39.3184 12.0437 36.1243 12.0437C35.3257 12.0437 34.5599 12.3609 33.9952 12.9256C33.4306 13.4902 33.1133 14.2561 33.1133 15.0546C33.1133 15.8532 33.4306 16.619 33.9952 17.1837C34.5599 17.7483 35.3257 18.0655 36.1243 18.0655C37.7213 18.0655 39.253 18.7 40.3823 19.8293C41.5117 20.9586 42.1461 22.4903 42.1461 24.0874Z"
            fill="#02050A"
          ></path>
        </svg>
      ),
      title: "Lets talk us",
      li: (
        <>
          <li><a href="">(603) 555-0123</a></li>
          <li><a href="">(603) 555-0123</a></li>

        </>
      ),
    },
    {
      svg: (
        <svg
          width="62"
          height="49"
          viewBox="0 0 62 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="null"
          class="img-fluid w-100 svg replaced-svg"
        >
          <path
            d="M58.1875 12.25C57.3753 12.25 56.5963 12.5727 56.022 13.147C55.4477 13.7213 55.125 14.5003 55.125 15.3125V39.8125C55.125 40.6247 54.8023 41.4037 54.228 41.978C53.6537 42.5523 52.8747 42.875 52.0625 42.875H9.1875C8.37527 42.875 7.59632 42.5523 7.02199 41.978C6.44766 41.4037 6.125 40.6247 6.125 39.8125V10.4431L24.1325 28.4506C25.8552 30.1711 28.1903 31.1375 30.625 31.1375C33.0597 31.1375 35.3948 30.1711 37.1175 28.4506L48.1119 17.4869C48.6886 16.9102 49.0125 16.128 49.0125 15.3125C49.0125 14.497 48.6886 13.7148 48.1119 13.1381C47.5352 12.5614 46.753 12.2375 45.9375 12.2375C45.122 12.2375 44.3398 12.5614 43.7631 13.1381L32.7994 24.1325C32.5147 24.4195 32.176 24.6474 31.8028 24.8029C31.4296 24.9583 31.0293 25.0384 30.625 25.0384C30.2207 25.0384 29.8204 24.9583 29.4472 24.8029C29.074 24.6474 28.7353 24.4195 28.4506 24.1325L10.4431 6.125H33.6875C34.4997 6.125 35.2787 5.80234 35.853 5.22801C36.4273 4.65368 36.75 3.87473 36.75 3.0625C36.75 2.25027 36.4273 1.47132 35.853 0.896986C35.2787 0.322656 34.4997 0 33.6875 0H9.1875C6.75082 0 4.41395 0.967966 2.69096 2.69096C0.967966 4.41395 0 6.75082 0 9.1875V39.8125C0 42.2492 0.967966 44.5861 2.69096 46.309C4.41395 48.032 6.75082 49 9.1875 49H52.0625C54.4992 49 56.8361 48.032 58.559 46.309C60.282 44.5861 61.25 42.2492 61.25 39.8125V15.3125C61.25 14.5003 60.9273 13.7213 60.353 13.147C59.7787 12.5727 58.9997 12.25 58.1875 12.25ZM45.9375 6.125H58.1875C58.9997 6.125 59.7787 5.80234 60.353 5.22801C60.9273 4.65368 61.25 3.87473 61.25 3.0625C61.25 2.25027 60.9273 1.47132 60.353 0.896986C59.7787 0.322656 58.9997 0 58.1875 0H45.9375C45.1253 0 44.3463 0.322656 43.772 0.896986C43.1977 1.47132 42.875 2.25027 42.875 3.0625C42.875 3.87473 43.1977 4.65368 43.772 5.22801C44.3463 5.80234 45.1253 6.125 45.9375 6.125Z"
            fill="#02050A"
          ></path>
        </svg>
      ),
      title: "Send us email",
      li: (
        <>
          <li><a href="">deanna.curtis@example.com</a></li>
          <li><a href="">curtis@example.com</a></li>
        </>
      ),
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
      <div className="footer__top">
         {
        footerItems.map((item)=>(
       <div className="footer_item">
          <div className="footer_item-svg">
            {item.svg}
          </div>
          <div className="footer_item-text">
            <h3>{item.title}</h3>
            <ul className="footer__list">
             {item.li}
            </ul>
          </div>
        </div>)
        )
      }
      </div>
     
       <div className="footer__bottom">
       <p>© CodeeFly 2023 | All Rights Reserved</p>
       <ul className="footer__bottom-list">
        <li><a href="">Trams & Condition</a></li>
        <li><a href="">Prvacy Policy</a></li>

        <li><a href="">Sitemap</a></li>

       </ul>
       </div>
        
      </div>
    </footer>
  );
};

export default Footer;
