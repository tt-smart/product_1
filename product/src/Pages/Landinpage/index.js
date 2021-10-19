import React from "react";
import "./style.scss"
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Tabs,
  Tab,
  Card,
  Row,
  Link,
  Col,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { Divider } from '@material-ui/core';

import Header from "../../Components/Header/header"
// import SearchIcon from "@material-ui/icons/Search";
// import BusinessIcon from "@material-ui/icons/Business";
// import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

// import InputField from "../../Components/Input/InputField";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function Headercomp() {
  return (
    <div>
        <Header /> 
      <div className="content">
        <Row className="row-one">
          <Col sm={4}>
            <div className="img-one">Image</div>
          </Col>

          <Col sm={8}>
            <div style={{ marginTop: "2%" }}>
              <h1>
                Easy Way To Sell Business Or Find Investors List You Business
              </h1>
            </div>
          </Col>
          <Divider className="mt-3" />
        </Row>

        <div className="first-content">
          <Row className="row-two">
            <Col>
              <div className="image-two">
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    className="row-one-img"
                    src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Falejandrocremades%2Ffiles%2F2018%2F12%2Fbusiness-3605367_1920-1200x741.jpg"
                  />
                  <Card.Body>
                    <Card.Text className="card-one-text">
                      Business Below 10 Lakhs
                    </Card.Text>
                  </Card.Body>
                </Card>

                {/* <img className="below-ten" src="https://cdn.corporatefinanceinstitute.com/assets/business-risk.jpeg" alt="image-one" />
            below 10 Lakhs */}
              </div>
            </Col>
            <Col>
              <div className="img-three">
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="https://wp-media.petersons.com/blog/wp-content/uploads/2019/05/03135244/iStock-941265460.jpg"
                  />
                  <Card.Body>
                    <Card.Text>Business Below 50 Lakhs</Card.Text>
                  </Card.Body>
                </Card>
                {/* <img className="below-fifty" src="https://static.businessworld.in/article/article_extra_large_image/1500617734_I0Nhzz_communication.jpg" alt="image-one" />
            Below 50 Lakhs */}
              </div>
            </Col>
            <Col>
              <div className="image-four">
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="https://njbmagazine.com/wp-content/uploads/2020/03/ExpandBusiness-775x500.jpg"
                  />
                  <Card.Body>
                    <Card.Text>Business Below 1 Crore</Card.Text>
                  </Card.Body>
                </Card>
                {/* <img className="below-onec" src="https://njbmagazine.com/wp-content/uploads/2020/03/ExpandBusiness-775x500.jpg" alt="image-two" />
            Below One Crore */}
              </div>
            </Col>
            <Col>
              <div className="image-five">
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="https://www.esa.int/var/esa/storage/images/about_us/business_with_esa/19716975-3-eng-GB/Business_with_ESA_pillars.jpg"
                  />
                  <Card.Body>
                    <Card.Text>Business Below 10 Crore</Card.Text>
                  </Card.Body>
                </Card>
                {/* <img className="below-tenc" src="https://www.esa.int/var/esa/storage/images/about_us/business_with_esa/19716975-3-eng-GB/Business_with_ESA_pillars.jpg" alt="image-three" />
            Below Ten Crore */}
              </div>
            </Col>
            <Col>
              <div className="image-six">
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="https://images.squarespace-cdn.com/content/v1/59fa100ce45a7c8e09b1a65f/1510687985554-SEVF8AVX50XVQOUPKIYP/AE+Business+Solutions+-+Business+Intelligence+%26+Analytics"
                  />
                  <Card.Body>
                    <Card.Text className="card-text">
                      Business More Than 10 Crore
                    </Card.Text>
                  </Card.Body>
                </Card>
                {/* <img className="more-than" src="https://media.istockphoto.com/vectors/multiethnic-business-team-vector-id910104070?k=20&m=910104070&s=612x612&w=0&h=zKSMXJOItah9RZel-CZPcZSftFpLDrObPwQUvTOeg6U=" alt="image-four" />
            More Than 10 Crore */}
              </div>
            </Col>
          </Row>
        </div>

        <div className="second-content">
          <Row className="row-three">
            {/* <Col md={2}>
        <div className="img-one">
            hello
        </div>
        </Col> */}
            <Col>
              <div>
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="https://images.outlookindia.com/public/uploads/articles/2021/5/20/photo_571_855.png"
                  />
                  <Card.Body>
                    <Card.Text>Software Companies</Card.Text>
                  </Card.Body>
                </Card>
                {/* <img className="below-onec" src="https://images.outlookindia.com/public/uploads/articles/2021/5/20/photo_571_855.png" alt="image-two" /> */}
              </div>
            </Col>
            <Col>
              <div>
                <Card className="card-one">
                  <Card.Img
                    className="img-hotel"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhUXFxoYFxcYFhoYHRoYGBcYHRcWFxgYHSggGBolHRgXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy8lICUtLS0tLS0tLS0vLS0tLS0tLS0vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAL0BCwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgEHAAj/xABHEAACAQIEAwUFBQUFBwMFAAABAhEAAwQSITEFQVETImFxgQYykaGxI0JSwdEUYnLh8AczkrLCFiRDU4Ki8RWj0jREY3OD/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQUABv/EADURAAEDAgIIBQQCAgIDAAAAAAEAAhEDITFBBBJRYXGBobETkcHR8BQiMuFC8QUjgrIkM1L/2gAMAwEAAhEDEQA/APVuDcOTDWVtrso1PVtyxoawvb3O1b+7Q/Zjqeb/AKfGiMcDdbslMIP7w+H4B4n6Us43jGZv2XDnK0faONradf4jyH6VyHwBuHU+w78FW2Sd56BB8ZxX7U7WVbLh7f8Af3AYmNezU9Y3PIUgu5sddWxYGSzbjYQFUaZo8vdWrL7m+y4PBiLS+82866ux5idfE1qsPZsYGxvCjVmO7t+ZPIVKB4pk4Znbw3Kn/wBYEY5DZv4q/D2LOFswIREEkn5knmTWYv3rvEGIBNnCK0M0au34VH3m6DUDnJ0qa2LvEHD3Ay4ca27YMG5+8WHur1f0XrTp8SljuoEZ0WIHdtWFjbw8vebypxII2D5z5ecJUwdp7fP6lWWsPZw1pQVypP2dkd5nY/eb8bnfoKXY3G3LtwKVzv8AdsAyifvXTs7DpsK7gsPdxDF1Zgp0a+whmHNbS/cT+jNaLAYG3ZXLbWOp5k9SedC0Oq3Fm7dvzyGQK9AZjc/Pm3eEFw7gsN2t89pd8fdXwUU3LVBnqpnqlrG0xDfnFASXXKtL1DPVZNRL16V6EQrVarUCLtXJcrQ9YWrvELMrmAkry6jmPhQaqt20bbajLBPM2z7rfxI308aZW3pViENm4GX3WPdH7x95fJh8wOlZUsdfLArGiRq+SwWLwzWna2/vKY/QjwIg+tUVrfa/ABkXEJyADeKH3D5g90+Y6VkDXz+lUfCqQMMRw+W65rqUKniMnzUpr6ahNdBqdOUprhrldry8uGo101yvLy5NfV8a5FEF5SFdtoSQAJJ0A8aiK1Psjw2Sb76Ks5fMe8w8pAHifCm0qRqvDR/QS6lQMbrFN8HYGFsgffMyR12Zh1ici+J8aO4ZhMil3EO24/CvJB9T1JNVYO32tw3GEIphR1ZdAPJNR/EW6UXib8V3KbWga2Qw9/bcuY4k2zz9vdRxF6luIv19iL9A3GpFWrKcxi5cuTVc1ILU+zqdOwTbieMNlVs2e9efaeX4rj+A+e1ZPFXCx/Y8KczMZvXT94/eZj+HlHoPGePxNwucPZOfEXT9tcGw/cU/dRdv5mmSrawFoIsvcfkPeuN5clHwAqhztc7ALfoepSGNDRv+X9hzV1pbHD7BJPmfvO0f15UHhOG3MW/b4uEtLqtttFUdXB3PgfWBpRGF4Z3xiMYc1z/h2V2Xy6H94/zo1+1vkBMuUbGPs0I/CP8AiuOp0HKixsRwHv7czGKEzlzPt791HH8RAAS3mUNtl/vbvTL+Bf3jy2jep4Dgcw18LA1Wyvuqer/jbqTTDAcOt2ZIlnPvO2rH15DwFFM9PbSJ+6p5ZfvtxN0GtFmefz5wXSapZ6+ZqgaMlCAvi1cLVBnqlmoC8BGGyrHu1Q12uNVTCkOqFGGqXa1bau0KRXFagFREWpzZu1ZiLK3EKNsRv0PIjxFLLN2j7N2q2PDhBSXNIKCwbTns3RJ1DD8Ug5o8HWW81NYbi2BNm61s6xqp6qfdPw+c1vuLYYsBdT313jcrIOniCAw8qT+0eHF+wLyxmSSY5ru4HgJDjwLVLpNIvYWZtuN4zHHuYyTKFTVfrZGx3H2WMr4CumvhXDXTXwFdroFdivLVCuRU4r6K8vKsivqkRXwWtlYiuF4Fr1xUXnueg5mt7cs+7h7egA1PQDn56n/qJPKgvZvA9hZ7Rh9pc2HMDkPPn/hpnbGRT+I6sfoPIfr1rtaLRFNl8TjwyHPPcubXqF77YDDjtU7rqihVEACAPCleIvTV1yTUBhyaOo5zrBY1oCCImurapnbwJ6UTbwFA2g4rTUASlLFW/s1Nhh1G5Hxqcp1FPGjxilmrOCzPBsALINqwA98x2jnZehY8h0Xc/OnmA4Itom4ftLze9cbfyUbIvgPWs1w21iMOIW+GEkkQDJJkmHMyfA05t+0pX+9QjxAI+unzpVPSaLbPEdgtqMqOMi6MOHUM3aLoeZJk+Z5jwopWWIUgdBt8qpw/HbD/AHwP4tB8dqLOGtuJEa81P6aVVTDXCaRB+bQkFxB+8QhnmqmeiHwbj3WBHQ0LeYj30I8RtWOLm4j28xKNpBwUGvVU1+vjaDe6wPhsfgaGuWWHKp3VHRKc0BEZ6tt25oBWINMMJeoGvk3REQLIhMMKk2FFWgzUg4iqtViRrOQj4EUNdwZFF4fiNu4zIp7yGGEER8RrRLJ60BpMcLLRUcLFIisVbavUbicOImldwRU5mmU4EOCaWcRQ/Zdm8j3H+AOvy1PxYcxQS3aPw9wMMrbH+gR4imtq61vJA5kLE8e4b2F0qPdPeT+E8vQ6fCloFb7jXDzeslYm5b1XxHMeo+YFYZUrlaZS8N8jA3HqOXYhW6PU123xHwdFECu5atW3UxbqEuVCpyVwrRXZV92NZrLEIUpx7NcL7W7LDuJ3m8ei+v0BoW3hiSABJOgHjW/4Xw3sbQRYzHVj+8f6iuh/j9HNZ8xZvU5D1U2k1tRsDEq4WCTmPoOlVXVUe8wHrVlzBFveuH0/nUV4baG8nzJ/KK7ha4mI8z6D3XND2jPyCGbFWh1PkPzNdXGk+5aJ85P0q84jDW/vWh6rP61Rd9pbC/eJ8lP5xQOc1n51A3lHclEJdg0n5uUgMQ3IKPQVaMBcPvXPqf0pa/tUD7lpm9f/AIg1U3H752tBfFv5kUr6jRs3F3me1lop1TgAPJPU4ao3JPyq79jTp8zWWbit873UXyI/0gn51D9rf/nt/wC5+tENOoCzWHyb7rfAqHF3dLsYp60qbEOnusR66fDavr2PJoO5fmuJVcHOlq6LRa6J/wDUT95EbxAyn4pFXYbiqr7rXLZ8DI+Ig/WlDPVZNC0Zwj1Atpgvai8P+Jbu+BgN88p+tObPtWm1629s9dx+RrzEip2cS6e67DwB0+G1W09MrMwdPG/76qd+iU3ZfO3ResW7uFv+6yE9Acp+B/SpvgHX3HkdG1+deVpxNvvIjemU/wDbA+VN8F7SsnuvcTwMOvwMR8KoGmtcfvZfa0+8f9ilHRHt/F3IraXEj+8tEeK6iuph0b3GE9OfwpRgPa5jo2R/I5G+Db/Cmo4vhrkdopQ/vLH/AHCnNfQf/If8vt64eUpRFRuI8r9EXhrcf3hAHLzq2xdEsCCYMbTQd5gRAf7IAN2i3e8IYSCI92PH0rnEcNauJ31UpKurEgiQRDAjz3naqgCyI95npGzySZ1sV3AYoNduqyZMrAZiR3u6NRz+NGzJKrB8qznB7gN+/F1szD3SR3QRJKmNNY5mm1hSlvOrF2hQS7ZJGksSF3jXak0X6zRhEm42ds9iOo2DyHmuYjFDYUAyFuVM+wLd62ikHUMW0M84FXDCuN3VfJfzNZ9LUqXM+Ud4RCs1ot87pXbwLHlRVvDhfeIHrVt5rC/3l+fAv+QoM8Wwg9xC58ELfNqw06dL8nNHO/l+17Xc7AHyTO26mMpkjoKyntFwfs7mZR3H18m5j860mF4k7+7YYDqdPlRT2i4hwI6V6rTZpVLVEzkdUi/PqhY91F8nncLA28CaItcNY8q3SYC2PuiuvftJuyL5kCp2/wCDAvUcmnTp/ELJWuBOfumi7Ps23PSnF3juHXe6p8tfpQj+1Vj7udvJf1pn0WgUj97x5hD49d2DehULeAWwwIXM3Lw8dBVlzF4ltEQDzH60M/tKx9zDOfFtPyrmF4ribrhVS3bG5J7xA5mAd6YH0QdSm4gE4Nae5EeaAtefueBzPoF25w/GP717L5GP8sUkx9q0hi5iC56Zp/U1rcbigBBM6Vm8XdXko+ApGlUKTcyeJJ/XRNoFxyjgEpFy2fdQn+LN+ZFS7Yj3Qo8lX6xNXMZq3D4MtXILC4wzpbsrbASUH2lw7s3xNW4fBFuU03tYW0nvNJ/Cuppnh8PcPuILY6tq3w5fCqqP+OdUP3Gd2P68yk1NIDRZLcNweBLaDqdKJ7Gz+L/tNH3bFm33r7gn94/Qb0P/ALQYQbD4W66f01KiNV7mt4m/pCl8V77gE8Fhb3Crg3U+ooJ8I3Stjb9rcKeUfw3/AMswqw+0GDbfP8bbfVjUH0VP+NUcwR7dlWK782FefXbRFQymt3iMRgH3Lj/+f/wFCvgMC21/L523H1oPAdgHNPBw9YRiuMwRyWTVai6Gtda4JYJ7uKtHzOX60WvsxbIntbZ8nFeGi6QcG9R6ErTpFMZ9D7LCrbolMMTyrb2+D4W2Bne0PO4WPwEVO5i8Ig/vf8FmfmwNH9E/FzmgcR+kH1QmACeX9rHWuGM2yk+lMcLwm+vullHnA9QdKbXPaDCjZMQ/m4QfBWH0oX/au2T9lhbJPVmLn5IfrWDR6bfyq+QPoCvGrUODFdhcA/4kn93Q/wDt/pRdwX4hu0uIOTW2I01AkQ0SB16c6qX2nvke9Ztj/wDVcP1NRu47EuP/AKho6Kip8yCad/41Nv2vcT5X5kdkstquN2j5yQHD8Vfa9eW5hiimMrG53THuhVgMNCQf1pjieLX5BgqUEd22x0PUscv4dY5VbhOOYjYlXj8aD6oR9KIPGFHv2VH8DlfkwFaKtJ4JZVInce4Lu8cELmOm7Aefukl/jV87vc9GC/5RS+7j3J7wB/iLH6mtT+1YZ9DnU/vW5+dv86EucDts027qv+7nUH6Aj4Gp36NXf+Lw8cZ6XPruTW1abcW6vJZwYpuoHkoH0FH4HGGdWPxp2OA2fv2ryeM51/7YPyouxwfCqRop8y350A0Go1w+4DmR0sVrtIpkYHyV3D8VmQgXCrEaMTmg+TaUnv47EBij3rkjfKqqPMEHatBatWAYVbc+Xz2qrEKDoA07Ai0xHpsCK6b2VXNAD7jYe978VIxzA4mMdyzjOrGLl24T0LsfkBVqYKyBohJ8mj5mrsbhCChbNqYkoV+ZYk11sQiGG057E/QGuW4RVLHtFszcqwEasjoqwiKP7oA+SD5mTVP7S7GFUgczmOg8lXWjDeVx3SD10IjeNx4GqMLaU5sxt8ozuy9dsrCazxHms2m2IPoJ39lv2hpcVA8JL/eJ8NfnNN8DgjbXLbGQHc6Ek9SY+VRsYgAZRcwqgfhRm+ZOtWDGgf8A3A/6bH6rXQp0KdM62ed2ju4FTPe51sufoF8/DZBLuQObMYHoKBxLYddLaNdP4ixVZ8/vegNTxGJsMwzO9wgbnKv+bRfQCqbvGGWeyRF/eH2jf4mIA+dDUfSAMxG2Nc8v49+Kxrah29h7qVjhNxzmyhR6oo+Ms3npV1wWE0u385/5dufgcuvxNJcRj2ue/wBo/wDE2n+FRl+VWW8KWXko6DT+Xyqb6qk0xTbJ3megtwklO8F5/Ixw9zdMrvtCtoRZspb8bhAPqqyxpRi/aVm96+0dLcIPj7xoRsCuYyZETvVdgWyTl1A3IGnjrFIOnVamBNshYdPUJrdGptvCieJD7tok9SMx/wC/T5VZ/wCoX/wn4gflVzWhH9dasyjwqM6RAsO/pCdqtWQwuW4oYCJ/Kq8bktgMyzJjSPzqzgY+xXzP1NU+0Q+zX+L8jXRB/wB2plMYpsfdCoTiFn8DfAUzwHE7M7N8v1rJ1fhb5BEvlCsW581Qchr7u1Uu0drwQSfMo3gNEgSvT8PdtFAQrCdoB+UUh4jxu2JGdwNogn61n8Q3aMz4h+1QkKgYNkXKO92eoyudDOh2oTH3ZLIskyAAA33SdBOvMcyaWNEBMOJ+cZw4BLYAXRq9euCcjjQchRdeToBBA+lWpeZdTlI8UVtvMVmOHH7ZPP8AI1pLx7jeR+hoatMUyAM/eE17GtMBP8I9trBc2m2kEWyoPiNBSUY4BWuKbgCnbMQeXj40vwvtZiBaW0ztktplUREd0gbakbVRgX/3R55R/poqlDVMycQMduKBrdo+TwXoPDzcbDhzYchx3CSDmEec8jTK3g74t2SiAq/vEnUDeYnoD8q8yte0V7IqF3KoIUSYECNBO0eVaHiHEbsYULcIXuFgWiQDbgAdTMQOtYaTGVACCZBi44nL5tSKlN9sBc7ffgVq7GHuS3ZrmaTAkD5nkKljcPcQI91BJMQCI/lv40k4liytokMQS2WQY96R9TQC8QuvhWNxiSrgCTyECNNBqDUNIsND8TOsIuIxxgid2KxtNxeDNsDt2J1xXDPmysGtkiVGfcde6aWDBNIl3OsRM/XypNa48Qe1bvLnFnV9Rmts8gZToBbYb0047jWt4S5dtMQVQMmxgyNYO5g0yrRIeG//AFETeJixNgMZ/HcmEOaL5WPEcbpucXdtBTaLhSN2zAHrABANEcL47dvMUz3GKzOVOhg15hhvaXEsLGe6gRWOdZGqkrM5iYInZQPWm9nF3UzOjBbd1pU5guadRBmdvlVjqVWi4N1zG5xHL1A2IG06dQEwJ2kdc1qW41da8US/eBgiDtodfWoX+JXQ6pcxFzvGAAdT5d2B60r4bh3S6blwBVysWJYQNNTvtvRPELDPesuglQZJ020qM6Q8VIDyRG2bjL5lxTPCp4QMNy0bLaV1CXWud0ZwzhsremxM/KrsRZwryb0ZssJqR3tSIA3PnWd4fbcX7zEHKwXLr03gcqWe12JghTMNbcaf16etFS0ku0qzR9ww/wCI7d1O6jDQNY2z6rf3TYADWlUSMpgROXqI8aAw1vDs/wDvEZQDlkkakr0rPcCvahdZGHt6Hce9v4/pR95tqRW0s/Uipqi2WVwsbRhmqCeOe1LuHYs9sVS2sBys+pifQU29oMQUVcpsNJiEJMdJjr+RrH37F1XZwsCSZJgRJ/eFU3Vu5ZgBYiZAHxDRVIZTgi14zOPqrCyTIj34rScLxHaKSQogxp5CniWEVVPaL3zBXmBB3+FZHg1zs7RLkLLaEkQRA1mYpjevSbeXUFwZGumVtdKjc1tOo60jK5EeXZeqCXWPyFHBuxxBDN3NFiNB1brNPOMfsyFYus0iCPoY8dfhSTDXgruCNWIA8DJP8vWg+NYiLgH7o+ppzNWzdUEkY5iNl889qGmwuqYkR1TviOWO7MZRPwNX8EuhMPbt8s5J9f8AzS/GP3PhVCYnKAJ5E+mk0rRqhBJ2oHNlkb0wPMDYHTy5UFe941fYeVB6wfkKFvP3jUwH3FE1Z2zeXD2gLrAanbWZJMAClfFOM2nhGz29QZZRqCNDAM85qji2MBtG5bIYqRyVonQ6MDG9ZX9qDXC91nnSYUHlG2g0HSvptG0Nr5qGZv58ISH1i1y1eGv4eGBvgZgB3kg7gyMwkHSKjda0jQDnESGn9OVLrHFrFhCbYZ7pXuu5twh5Mq5ZB8J5UKl0Pz35nU03wXSSZjfHsIVmiVtd5krdeyz27rCzdJKMwYAOyjOAYnKRIjMI6hTVHEsLas4h1PdRGMOSxKhdZJnMfMnWkODxDIysnvKRHKYg/WtBbtJjGuMzFO0BdYI+9sDm3Guo3qd/24m27JV1aYY59UZt6pHxLiGFtOvYsSRqSFkKNpIaCTBmARtrNT4hx9bV97ZLNbUAaquYkqJJKkDmdKz9/h4w924pbPlLIx1joYEyY21PpXeIuLjEsVzaAsREACB7vIDwq36ekYGIjE45c1xvEqkScVsf2QXUt3bbWYYDM1wGVVVAiCRO0biKCvYoJauKr4VmLaW0LNKjmcs67aSPOsVir2ZVVmACSBpvMda9L9k8MgwdkFVOZcxkA6sSf0qXSaQ0doc4zfCOOflOHFa2q5zo9fRAYYWWVZRVYrJXNEaajXWmPErmY4c2whFsw2edB3fd6tCnf8NNhhrXO2n+EVJuF2DPc+DMPLY1D4rHEOvad+IhOL5xSW/jGvWrlp7oDi4rKSuwVg06DmRoN6t4BcNvD9n2YdswJAjKSMskydSYk+dajC8Kw6KpFsExMsS3+YkV3FERoAOenxr1TV1C0C0zsvEZRig8RszC81uYq2lw2HfL3mlSdmhlEx96LrRW9t+z9x07O9dTJlClVQGQOpbfYfCvMuN4MPi8Rc/DisOJ8LgOaPUCvVcRxVF0LSeg1P8AKqdJLYYRcxPAwDbkV46W+rIgCCcM8vOwWS9uvZjD2MOtzDoQ4uKrRzUhvujTeDMcqUY3iUYWyoYpcTLuCI7pUwY31+VP8bjnu32WDl0hdDJjTTeovwHFXHdUt5VVZkgLmMA5Qx3Yzt8aNlSdUPvH3Y7bReVurF3HssxgPaC5dF1L91mVlKhcxgAgwRJneNPCttZ4rcLDsra3UCI7FHBcK8wQmh0jXzGutYnH4Z3BRkIdc5XugN3R3gxjUQvPaPOj8Klyw9rEWSHb9nT3QTAu5l1WO8TyG0jnpTNIo0qsS294GWA2RsxQXbYFbHhnE3fEvbbRVsoyjmCXYMGPWRS72wnMjRoEbX1ESI15Utv8XxmFvf7whZssQ8+6YbuEGN49ZBqn27vG4cOyTlZGb5oRPxrns0Us0pp/iRAOODUYEhafhB+3uGd7aR4AO2nxJPrV3Hcc1tUKozknULHugjMTPILNZ32Kxrvdu5+VtI0j7zVP2h4wRdKdxrcRlKlu8sHqAZzemUdaR9M46TqxMAT5AIg0kHJDcR4ublgs1nVCjZbggMSCDpOusj0rMYG+WugswBJBXNMBs2mgBAjpEU4xWKtsht9ioBA1VyCIBy5RqI122M0hu4EzKtn193UNJECBrOp5Gu3ozGtaWi0/N4xnGEszndaLjmEtMtoC+cRiHY57aGFBMe6ABBJMTl112iqcTi3uXVs4lmtiRbGWECH3QXRcsiYnWdzSlMNdw1+2rhlc3EOp1GugGuoMg+lV8UxZGLdySSt9iSFzmVdjOUmDtsaY1oc5rZmxIPts+bUJkNJWjt4rEYe29oF82UtmLajIy7B5kEaydN9qJ9nuNPffLeAcLbZnLKoIywZVl0YROmWdOdV8Pw6Yprdy7i4JOxt9nmQnVQZhZ6wa0nE/YuxeZGwzJaZAQwVg6uCIBPelTqdQD5VI9tNwLXgAnMDA9/ILXP1YgrPYr22z92zh3Yaalo08lBj1o7hfGlvMUKOjBZg5SDqJgg77aaVm+I4S1hJw966brIACLSwFY6mWZoYweh2oPA8VsoZuYdrw6G7k+agxz5868dBpFv8Aradxn3IXte2K9SwrjIsbQI8oFUXj3jWU9muK2Wc2XxF20juOxDkyoMjL2mqnkBm6A1y97NYxWYQhgnVrjEkTpPpFQD/Gw92u4Dlj1CPxW5LJXHIWS5jwgekARQ10HKSYJ/hB9NaneP2fr/qqN9ZCid4+lfQN9UrVmyFv2hJAKkwDKmBqOhA1Fdw2JCAsQTEDTqdefhV97AksWDRPppG1D4vAgITzGs00OY6ASlkVWEvYMJ2Ij/aCNFtz4lv0E/OqbHGboti3plXUd2TuTqfWkrCmOBICcgSx7x6ZTp8YozSptFhmpxptes/7n5HC1jE4RuxOWSbYq+HZypkFhBPjE7+M1Xdw5uErI1JPpFC4G4q6nnv+dM8Be+9B1cx/AdAOu9IcCwWyVtHVqAA59kE3BSefw/nW54ZxBLdm0hzDKiqdDuBrtSzDqpOszDEeaqzR8qe+zfChiLd8fegC2TycSw16HQHwJrnaRU8QDxMB62VB0emyXARtRVjiCHZ1npI6Uct78j8xWK/ZWEyAOs7+UVG2GGoJU9QSPTSpjorMj6ovpycCvS0xEIJIAAOp8zSbFccTUKC2m+w22nf5VlMdxIogLM1wzAUn9dhS1+LXSQQwURPdUc+RzT9aOnojnDd85qdzNUwVPiGGutdumQFu3LTMAdfsx8t6O4viW7C4UJBA5aQARJnyo3hii5hrl52toUdFjm2eYMDbY1XctgqV/ECp9RTnvhzdYYR0gdgn0aDC06uP9n1WIzASfvDWec9Zr0X+zr2s7M3beMuZkFsMj3DJBzBTbzHkcwOu0V5uqnUEa5fzo+xg3a3ehTJVAs6T35IE76CuhWphzYPnzjNQWIwW89sPbG7byDDXbTdoDmKwwVVOihSSoJzGTGsCsrZ9p8WjdouIadOSx3ZyjLEQJMCNJ0rPhGQ5bilWnYiNI3qbbN5il09GbTaGmDvgGe6NpBuF6j7Pe1i48Ph8baRnFtrlswcpKD3Sk6HnoetKvbG6R2EW0TKrrCZoyjs/xMY2rJcNuslwurFSltjI31Kj/VWyw/GVjvdo0xudtOUAaec1JXaabw5gkbN5EcrEJ9FpuR09v7VHsdfJu3T/APjWPRj+tF3/AGc7W72ua4LRaWCLOVmEOdfIH08qtt8Ssg75TtsPqNTXMbxdrSm5ZutGkqjshMneIKty3HWo2l/jazQRIAw+Z52TS4jDNaq1wvDYayGvIjJljtWK6hhGmYysgbCsBj8HgVuFreMm2dAArF1n98aGOulK/aP2kfFCxbYtlt5/ebNLNlgmFUaAaac6SP3WB5HQj866VKgRckycrKUS3Fa/DCw2IsNYxKsVYdp28LIzAHICIPdzbmZIpP7T4K7+13yEWDcJUqqiViBoNDM6nnSrEFdo15aVZhcc1sqpYlCwDKdoJ1KzMelNZTcDrNOUQeM4iOVl6GzLpViNdCBA0BRGQgE9Z1ExrV/AON3lxNn7VwM4HvEDXSCAYinPEuBmyGYEXEJJzqRpppmGsQOe2nKstbdSmqxrAIBjr+tZSeyswltweGY+b0b2NaAJj9fP0mnHyf2u9mBksGMxzAmaTq8KfOK7aPePiOv5mpNaIWI1nfSmtbqNDTu6BABNwuYNe0uIgPvMsyfHU/CmHtZee5i7rzE5fvHkijr4UgvkA7wfzFduY+6xJNxiT4U3w3FwcDkesKd1UNMEJqinLELHiTQ6MWuqCdBqOnhtQOIxEkSNth+tXYSZzeAHw2r2pDSSmCsHOhowPZOMlC8Tb7JvT6irFuE77VTjcO7oQoPLTnvUzBDgSVVWJNNw3Hss7FM8Bh7bBZbWfdjU+vSiuH8OAB7RNeh/MCmdvDgbAD0qirpAFgo9E0Bx+90QciD+lTZwOXcDqPKjLVsblZ8+VSsgDcEnzq5rpOgEeVQveSV2GsgaoFkRw6+nbILoGTvZjOXKMp748R05zWs9h7cq+474I5/d2+dYXE4cNlgmQddNOvXwp3h8HcYjsyVGvekgQTpt4VNpDGup4x+jxzQvaACJifh8/RFcetK2Ium1qM2o5Zo70es0CcPcyyUbLrrBitXwDg6iQCzNvtpP+nzNaSzw9UBZiHfko90HkPHUiphVJ/ESNpt0xSnaSKf24ry7ins9iL9lbtm1mVWIKg987d5RzEjzrMCVJUiCJkEQQehB5+dfoFYG584+cnYVneNYJbt0OFsHTI5fcLqR3o70wQBB1qmlpZa3VLZ2KfXD3yTC8zwbH9hxOuhu2jHLQsPpR+Guns0YkElf63o3ivs5es4fE21X33RrUjJKhjyJMRMbzSvEYZ0SXVgETppoP5UxxZULoP8ALn+LVTQIBk4R7pGt8qWyGMxYk7GJMAHl6VO6BoxJaRz1jrrvVC2yGy7mAIAkkwNI60dxHhd+wVF601vOJWYg6bTsDpsdavcL8VJhiqVu6QQGXkrdTzWNVPlFQxOGGRnQmJAZTqVPLXmDBExyqhH18q7fvZQfEa/EfpXmzNl4xiVGziIZwCVzWip8tDGu2oB9K0XDsSuRJ/APjFZDE3dzsTFNsJeIUDwFDpFEOaPmSZolQFzmnZ3K0V1kPux5f+aE4jeC2407xQb9T+gNLnxJnYDy/nVd+9I1Pu5jHjkIH1qZlGHDYrHu/wBZhBM2UGTrnUjTlDBv9NcxDSVHj/X1qm7ezKDHLveBG9WTJUwYHrV5bEErl6wM6uBgqd9u+PL9asw9rtL1tORaT5DU/SqLurgiPp1pp7N2SbrufuqAOerfyHzoHnVYTsH6RMbrODdp6Y+ia38NEwB5jSkv7HcAIXWJ+H1rUvhSw0VvPl9NPjQ3YSO8yR4t+lc+nXI3rovYw4mD82LHkZANNdo35nrQha5O8itkeCq8kOGn7uhjx313oW7wIj+vyNWt0pi5ztFDoAdhgs65GpI8CBp66zV9u4sDQ/Ci8VgWGwnyqn9iPT5U4VGkLHUXNOCvTBJEZZ8f62qwYVeQFMEtMRBML8vhzq79mUCZn5fT0qM1SrWhjbQl624q7NO5JqzEMp90R+f6VUFoJT2gYwrLZA5D11+FX2rEnXTw6/pQ6yKJtNcc5VBYnSANSSf160JuicDkp3bSgR97zn8qhh8Oz+6J6nkPM1v+Dexdu0A2KOe5+D7inoY98/Lwpni8RbXLathVMxCqPmBoBzM9NqS94apPqwLNvvyWHwXDAkFu83TlP1Na3hfBXuBe0UWkEwB75k8yRoPT0ppwnBWbWu7/AIiI/wAI2WmqXAf51ODr4kFT1aziZVNm0qLlQAAf1JPM13HcPS6AGnTYgkEeRFWNbB08Z+GtUcS4itlZOrH3VnU+fQeNGQIvgpxJNkLf4bYtJmctA2liTPRQTvSHit9A9q/dVhasKfs7Rzs/aMAmYyNQdxyneunilxrodjrsByAO+UHbzqeHhw87FSAfI6R11ikCvD/tHz99E4sycirXHbd5De7J1CqR2bqo3IAOhIA2MVTheEO/dIKydTHIGWjr09RUcNgX7O4hEMVBAJ8QdY8q0WDwmS2EzFuc+PgTsKxo8Rxc7atc4MENQR4Nh0Zby2bQZB3GyKGBiN4mddzRV7CpcQpcRXUjVWAIoHG4pkhXRioMhl106EfmK6mPD65XPQRlA8ydSfStdUBdc9UsAgLzbj/sHeS837KqvbclrdvOA4URmGV4zBSdwToRWTxuAvW7nZ3UZGA91hB+e9foDhoDfakHMe6JEQAdhPI6HxgVzFcDt3SxuICZ9dgPhAGldGnpb4kiehXg/VN1+eOwytBEeFG2jB9Ph4jxree2/svasobgQA6BGHd1JAIYDQ6ViBaiqG1xUbMbrroUWhzSRgo3CDudOfX0nWfWgL85THTSmlzCEANBAOxoU2aJtQYhb4ViAcUltkbTr4fnRVq+M2Xc7f8AiT+lW4myBsIk1w4Od6pNRpuVzxo9RphuXZWErOX73Sf5mjMBdNm2VUxcZpJHIctR4a6UtsqVcMxkDT086PwoD4gwvdkuwUT3FUs2g6gek0LmgiMsVocQZdY+iPxq3lt22e60OSMsxlgAiQNpDAxOxFBCOYE+h/zTT3iV5b2CtvlK/ad6QPedCWZTzErz206UgVWAllMCQG5MBqdeomaQwkgyIIJHzkmG1vmCsyjcQD5AfCINFYfil1D3vtFGwfWP4WHeX5ihf61qsamNK0gGzhKyU3tYizcPvlD0cDLr0df0q/8A9Nbks+IykHyM60iuNO23Lx8apg9fkfyNLNLYY6porubbFOziWPP5RQ93mTvvrVh0qMdaSDCrAAwV/DRburlBi7GxjKT+6R+dcNqDEQQYM6QfWs1avG3cgGCu3xraYLGLfTQjtAPOdNoO5+u1HXYaZnI9FLSrmI5KvAcPFzUuCAYIG/r0pzhsCT3LKnNyy7+c8vOs72bC5ntHI3jz8HHM16d7PY+ybWVO6SNY0M9ZqKvMi9ltV7wLpWcBiEAfGYm5dcgKtm2ci6c7rJ3mPWCAdtaM4BgiC1xgBHdURoBzgDbkPjX3EL1hzlZ1UpyLZT5gnerrfFLNq2tu2wZgNY70ddBoT56VPUcX81M22SblQdI1/rXwFSw95QSAZ5adfAUrsXLt3uqCinckyx8WP5CqcfxNbINuzDPsz/h6hep/rWvNgGevss1S6yZcX4ytoZRrcP3Z0XxaPpWXu32clnMk86rwGFa7cCrqTqSeQ5k1tMFwtLY0GvNjuf08q8WuqncjltIRmsFxEuFGRirA/L1oPgDrhsTbe87dlmMjUgO4IDkb6MfnPKtn7Qd2XWMqAGSAe/MKoB5yRJqr2c4N/wAa6NT7gP8AnP5fGm05p2yWl4c29k0TFJnLBwZ0EEHbaIphh3ka6eFUWcCimQoB8BRcVjAc1OYXzAbVxbY6CounPwqOHue9voYn0FFmsQ3HcSbVlnWMwjKCJGaREgRP8qx2D/tAxFvu4nDdofx22yE+aNI+Bpz7X40Slsax3m8zov8AqrOGDvWCvqEiJVFOi1zboL2s9oruLtgtbFpM/dXNmJhWksYHVdAPjyysGN6e+0j6216Bj8SB+RpTatkmBA0nXoPSq6TtZkxir6QaynuVRbSJjwqoLRV3CiTleTykRpQpkEhhBG4pwwRh4Kqu4csRBEg86ecL4N2yscyhlIBXKRuDHe9DyNKj4U59nccRdCGIYFNvVfmPnQVnvFMlmIulVKd9YIHGez19D7mcdVg/Lf5UT7PcKYNcxGfsWVe6WBXUHvTGoEEa+BrYAmgUx6OWcmE7K5rE62r5BaOY0J8qkp6bUe0gjZcb92F0DXXnMX+DPFK+PYlxhWFwI0skREA9850ynIQwA2jUtpWW/aC1mzJ17S4PQKunlLH40bYxdu2XskH9nuTImShOodfFSY8hV/s37MPjA6W7yA2WzAMDDBzBYMNvcXlzq9jAwGbCZmIxEcoOI/tJqEi5EZkDAXFhuEpNhjpv8qo7Q6+Jg16Xa/syAGmK+NrY89noQ/2YQdcVueVn6faVv1VHGeh9kkLDTFdjwNegN/Z0mUhbz5+RKrlJ6EbjzmsLi7DW3ZHVwymCMux/PzoqVZlSdU+ndeuEe1QIogiqmqUFdGVn+LJF0HrX2AxxtvMSR9Ku9oh7h8Y/OlE98+FdOmA+mJ2LlV3+HVIGZHULf4w51W8p10nxB2bz5GqeHcSa20TpQ/AcQTZgjw9KFxe9c0UwZpnAKkuJAlb3CXrN8jtVBPWtNh+F21UFMoG7MTEKBqRXk/DsYwimPFfaO7at210ZXfvA8wF28NTPpUn0rg/UF53oHYLacT45INux3U2L65m6x0Xx3PhzRgxXQe6rdRMdJ8a5U7jKa1oAgJz7McTs2rxW66oXWELEASDJWToCfyrQ8T43h7QPaX7aiJnNJjllUasT4V5vxbBrdTK23LwoH2c9nrb3VVidWAmOVWUvDNOSTZKfSJdrZLbcOvniN0OFZMHaaQG0N64BoSBso108eu2lxmMW0CxPLQeXIVVeC2LeS2oCqAFH5+NZXiOIZjLGanq1hMBA1utfJa5ftLYYMyl1BBmYkVbg3MAElujHcx1ihOCNmwtsnfLHzijHEARyitbKB1rIhq6DVdw7eJoTjF428PcZd8sfEAfnRygAlYri2K7W879TA8hoPlQhb+v519Miomp5krogQkPHrk3o6Io9dT+dCWLuUnUgFSDz3HMVPixm/c/ij4AChs1dSmIY0bgqWgFkI0kDuuuWN4Grd7Q6akiT/iPiKEuLKE6DKeehIO2k76beNWNiSAJAaeu422PpQ+IxEgAKBOp569fCmhTFpY5VW2iirTwQRoRqPPrQRq20a0hVyvQLGIzqrj7wn15j4zUXsKza8w6kDmLgIafUz6Ut4BdJtEfhbT/qBJ+nzpstcR4NN5A3qT8SYXnK4ZT2iu+VlVsumhK7ieWx+NaT+yvEFcYU/HaYR1KkNp6BqzftDbAxFwDbOfmZ/OmX9n10jiGGI/5kehUg/Wu6/wC+iTtE+qF95O5eyO8TrB+RBjQ+W/xq3f0qnjUWzIUHTnPj41Cz/ednJjdTOq6beIrklqkBV81PMf6FRt6zPIx5+NfRXtVGCv/Z"
                  />
                  <Card.Body>
                    <Card.Text>Hotel and Restuarent</Card.Text>
                  </Card.Body>
                </Card>
                {/* <img className="below-onec" src="https://www.canyons.edu/_resources/images/academics/hotelrestaurant/header-mobile-HotelRestaurant01.jpg" alt="image-two" /> */}
              </div>
            </Col>
            <Col>
              <div>
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="https://cmt.ggssachdeva.com/wp-content/uploads/2020/06/EDUCATION_-big.jpg"
                  />
                  <Card.Body>
                    <Card.Text>Education</Card.Text>
                  </Card.Body>
                </Card>
                {/* <img className="below-onec" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/online-3412473_1920.jpeg?meGHIUut1mybIL3pem8eWqk34osmW3Zi&size=770:433" alt="image-two" /> */}
              </div>
            </Col>
            <Col>
              <div>
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUVExcTFRUXFxcZGh8dGhoaGiMdIB0fIR8cHB0aHSEjICslICMoHRwcJTUkKC0uMjIyGiE3PDcxOysxMi4BCwsLDw4PHBERHTEoIygxMzExLjkxMTExMTExMTExMTMxMTExMzExMTEzMzExMTExMTMxMTExMTExMTExMTExMf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEcQAAIBAgQDBQUEBwUIAQUAAAECEQMhAAQSMQVBURMiYXGBBjJCkaEUI7HBM1JictHh8AcVgpLxFkNTY6KywtKTJHOD0+P/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAqEQACAgICAgEEAgEFAAAAAAAAAQIRAyESMUFRYQQTIjJxgeEFI0KRwf/aAAwDAQACEQMRAD8ArFLhVYABalJlAtKHbzDYm+zZsCAisp3C1SAfQjEGUzVRaWrtRy0gr5i/ywXluNVBv2TeTAH6kYpckJSZmVqVabIXy9UBWDQpBmCDvAxZeIe0tarSen2FQK6FZcyZM/CtMzy5j6YU0+PsBqakIHRv4TgzLe01IgEqw9RhW2+wpULK2cKKS0yWQtAK91Rz1AHptiVc1l6vdVHVjtIEdd5w1q8by7ghjAZYuB/HxwqylfKrXVQmsNAnQSt5mekDDRm02xXFNUT/AN20Dz+an+GJqfBaJFnX/MMMKuUuTTp/d306SQNhP1nA1VCsnQwgDx/HFVlflCOPyTjh2sJVDERpkT+re4xJ2332mZhDPeIju7eNwLeM4hcw7jSLCQYAG4FsZmCE01GIBbUDHI2g2ubfhPhinJUJTJErVFWpo/VJgH4th9NWI8vxepRg9itT4gzXuSeW24xvKnVrMnSDEi+8wdvAfPA3aGmdIqFlkamK6gsnwvAFzHywOSvYaLBnPaRUcU6lDUoNzyax5bc/+nBlL2uybgK1MKAIAKiB0Hl4YrXEAWdaigVCW0q637pW7WkHY7jpfEuipqNgL/7sKD6zJ+UYVqD7DchhxWrScCrRfSoWCgpaNRM9/XuInYfq4WZRAzFjskQecm3P1t5YH4o4piXLLN++zMzeUzYfnhNmq9R1hhop7x+tMwT/AJbC23rhl9OpKopL5Jzzcdv/AKCeOcRJ7lNpQGSQecGYi5EDyucK1RVOwcobxzFyYg7GN72jyLz2RyVOrWqI90VC4BspZYUE22hyeo54Z8T4ZlkIC0gpYgEqzRFybE7yBeRub8j0ynHH+FM5Y45ZXysrK8IqVMx90BAgltlAsw84Ui02tJG+LcVCUQHqNAOotq0iSBMeG38IOo41YKoVFEDYA9Np/q3LSbFe3s/VzALVKi05BCjSYuCNRgW3+mOTJkbWzthjUegTP5crNZWYqXGokAt3dLBrzsPETbHecGqstNG7SdGloJmGDWAJ+ElvLFiyvC6iqFJpVGDalmrpk6QvxLbYnnvhhkfZumKklBTiNLo0ybF2AkgSSRBGwPnjRyr30CUHX8iHP5qpSWm1SmQqsSuowJCkAaYWLmb9MDPmqbUaVFgxSwZjYFVBYwVk3YDa8E4t3tdwamcu7hmJQWGokfqmxJ6/TFYPBj9jSqCVGoh2MQFJKELzmwk2AvvhoxjKKfyLJyUn/BAeIhqSU0qaGaobggBKYYvYE8wAsR8WCk4pUikKT63Zrs8kKi+88mLyQLHngL2tNIUlWm66gYhd1tSPy0iJ2v54K4rkqCUQyoof7NRKQSCXJ7xtuSI3wHjTejKbS2GH2mqMXUjVTUDU5NpJjTN+RBnxxvK+26lQwpzbTaxFvdmRBA+mKVnFqKVJaoVJBUGyklVFgeesuJ8AcE8JSqVcEogpJLyQLH3rKRJJBtf1xnjS0FTfZcc5xyhmUjsxOoksQQ2/KQpjlvjmm+WIQAlYkMRuASNom8SbjeMVnJ5qo1lUMARMHSByEkixMxuPkMF5h6irrqUair1ADD5yfwwJKUPxDFxn+SHy8Jy7NC1AZ2B0KeskqFjbxxFmKLNTGl6a3vAmoPE90gD1AxX1z1I89Ph3h+MDEi1lOzjyBB/7cDlIfihrSVaVMvUqk31hhYkx3QCsiT1BYdcLeI8WNQkrqgmQSe9cCb8r/qxsMD1qfdKEwrEGNpI2PPArUCB/P+OCmvJqD/73c7sp86ak+p03xmAOzX9Vvn/LGYfmDiVSsVKIoEEoskHmCRcbGIO+ItEC4JHUQfmsT8px0FAIBJnTaOZBKkX/AGh9cGZfLyNyLwQQJHyOOdbLP8XQM9dBTJHebryF9t98GKIpgTEjT6nuz9cAcTpKIuCSQCdrSN8MKdVCZMQlwP1iCJ9AL33jAfZkNlqEawpECnYftT/64CoUCzLVaJQGDAjVBEED5H+WODnRJGhRNpBMm4PWB8uWHOW0f3eSVYHtt51HZbfCMB1o3sZ8EzeYZdIzCUyNg7lVi+24HL5+BxNmeJ11qgMKdUEAFxpdQJIYg7C/qbROKoUQ+7UAP7SkH6BhPrjRZktJEdD+Y388USQjL1Tz6s6q9OkEZyjPEAd0mCQRfw8RhhTylJ9OlQb/AAsRE2m5P4Y814Zm2ZamtpgpE+T/AMMbkTOG+25bTo58kZ3+Mq/o9Br8ApkFSX75BPemSLjdPHAb+zAAhajANIAhTv0hwfpinJxKop7lSov7rkfgcPOF53OOQFrVDtudX4g4ScZR22gL7vwMafs/UFVKgqAhWDXRgSLdFI6/PA+c4dmNSRUiF7wVveabWbTuLn+jg3iOZzNKnqepTboGRf8AxAxU+K+0NTM6adVEhWLSgaZ0uBYsRznltgY5Sm61QW8ke0gvP8AqhhUUO7yJLQ3Xa55xzwFWy+ZQEVKFWCCJNNgL3mdpnSZ/Z8574fw+s8RUcLY91isXvJtaB/W+LH2q010PVm2zNq9BJ+px0/dcddirFybfQn4Xk6ifevU7O3uJHu6tUE7AT8uVsOxkatQlNRBYd3vEhZFiwJiL77GDtiPLUS9Q6TTUhxp1KNIABJNovIBvI3sMOhxCstmNMqR3nCgcrAgqPxO+JzcpO2VhFQVIizHBqlOAWt0Gk/kD/ocRZniFSmLBGA5qIP1YziPjfGGp6SyK2sTKkTA6jVI9QBbFf/vpqkhKcibkxA825/MxiTXsomPaPtAWH6Nj1NzHoB/HHf8AftMe8jA/u6R/HFZZ65qpoSJZQYBIjUJJJiIWb/jsWmbz1OmRNRXMfBLem1/SRbcY0YX0FypWN/8AaCkBJqFfUx8zbG14/TcQKyMP1SVafQYUDP0xB1qrAyNQhh6ET/riPjqVKxCRIIVg4pxeLjUAOu3iMFxpgTTGVV6bKVCUtB94KuifGxGBqjqNDayNA0o2pSBMDTpKgGYA6mMKsrwBpl6jR0ET8zMYaLUp0hCKWI9b+JNsGKfsV16FvGC5pgNq0I2lSRBIA1AgDkraoMAnxgYVUEarUasz6mdd2MLIMybT4xbbeMG+1VfMmmmkCGbYAbi8ajHKRjlWoqqUzXqoyqLMTAgRt7vXFeTuibgqs3w/NU6bkpVUVSmknVB3MkGd77iMFVVc5eqACSShEXmH7xHXrgbhmTVu92iypI0mGSY95eYBF/OZnDT7O/8Ay/Q6fywG5eR4uK6Ff2c8yqDqT+QxxVyVOrU7veYgiWWwiTIuCL9PDDKtQqLp7pljAKmZJ9en4YLTh/ZzUd5aDAtEwRG0nfCtpqg2V5KaqIRgCN1RiT85+mIc1naiHu06vm6/npP44GzeUEmOtvDyPL0wK6VFnS5Xykfhv6zjaG2E/wB8nmPr/PG8BfaMx/xPqf441jBBqlRdCsCBcxKyDOlzcXF35Tgzg2lqonQZaYgn8UH44go5Gm1NEJZVgHe4MtqEkRE6Rtg32e4eorLDNY2kgg2PQDEOMkWbi/7LdmvYyr7xyi2vI7Mx4iDIxUs1lUXUqqoJckwRMAWG9t5Ppj3zjlTTl6pG/ZtHmRA+px4UEDuzGokDUbkrMnbnJAAEY1tsWhXXokKdJOoj+v68MWPgeUqHIKp1anzA8yG0wZ6RefDEGV4WgBYMCNpFwZ6/qnwNuhIxYvZzKqmXCjbtifmn88LLwEUZ/K9iqu6kKDB2Mjn63m+IBWpG1TQrixGgwItFgbxv4zh5Q4VmM2i9otRkXchYnwAv4GcIeNZGlSqtT7VVZYlarMGB8Yth1JiNWay+WQnSnZ1JYSoLU5hakAkqPTyx1mOC1iyhaRWV2Dhp0hdRmbXIMcp8MD5aoaZF6bmVddNVQZEwwmZ3+mDG4izsHamzMAAIqUzYEkbAdTg8pLpiPG3KyFuF1aclqVQsPhVSxJgGAB4EfPEeXzlan94xq0uQWCo8rjfHfFaFSqwrdrXV5siUiAlhcQyqJgbE3xzmKrVJWsalSnpgU2FVQrAAdpOpzq3m8EsTgNyfdM1SXghz/H3qLpZmJG5P54WcOqFqkDcgwZ/ZbwPXpi1f30W06gTpqagZZtIJIiDQ5ISsk73wJmuHmo4rUxU1GxMIABpI1AAKSZjle+BCTi9qv7s3fYXQNVlVe0VQBEDntedII+u/LENfJuJJIJ33N5PljYDp3CdJiS1QBnO47qdLbmB443UemyXa/jM/9K6fliimHiEPWpLLvLsDZSRAkSP3icRZvij1G7mprCF2AMCb7ATPpHPC37BSYB6gCk+hPgSLx9PHBtHMLalTmRsEEn0AnDcrA410c1sr3S9Z9QFyB7otz5tbr0tgKtx6mpKqrQNisAed4MR0viXjuSqKqmq2hKh2MFreVgCSLWviucWRQVZCt5BAJkwY1Hz3wraCo32W/iLhqeXfU81UkgKTOmByB69DtiTh1SiNbFXZgATrlJJaDuNR53mDBtgTimdNGjkGKyQlQOu8jUgZfzHiMb7RndT+iSDJ0lZ2geM3Mi1saOSo0g/ZUnbYdxLO0qqdmuWUMGWCsAxzEgCJ6/hhkvFbslNI0d2/gOX88VvPBFRnp1FJEEntAT8pvv0xO1SgqkOvav8AskWtEkmB8gcGMthnBJKhrlc4zhizLI1QoIk76e7PWOmOnfSpltBKhi8CxNuamIjeMVl81FqfaU1vYKpPqwe/oPTFh/2f7elS11GlVBB0ht5N56Ax6YZtLZKhcy03f9K1RyDZyDtc+lrWxvM5FakGIANyJ62G94/PBtb2VbtFqJVUaYgGn0EG4bnf542nD9LmmxvrZZAPJQRb/F/UYnOW00xoxT0RVsllqay7qDqi51AANDAKDPI7g3xtuP0EEUUJjbZF+kn6DFXo0qkudVSRUYEqSATMmSFPWZtvglaNVn0lWZAbA7npepYnb3cNd7MoJdsKznHMzUmGQCdlB/GCQcL8xm6hOqqtNj1ZVLH5D/yGJ+J5ioGRTRCgkiWVTAEXMT+OGLUsie5UeWOkSsqonqC4tcXFhgpt2kM4qKTaFGWY1II7g5w7LPgRqI+RGGOXyvaHudoQJ20kCOclT9TOC+FtSZSMvTpyBIDy5IlRaNMX5yfLGZM5llJJWnI7o1dm12jUq6e/Ycz8QN9sOoPsVzXQuq5SCQcyojkVFv8AqH4DGsMf7qj3mqTzu25ueWMwPy9A17K/XlSqICYkC0gaiW5eOkeuHXAqDtVpwlUjV7wUjbmCB+eEwqLqG+waQSJA5WMzY/PD/gnFnRkAHxRdnnoSO/HzxKV26KLpHpntbQFPK1HD1TC7Fy0+hmfnjySlQVSqqfegwRAv17x5YufEPaZzSY6wYj3SV33upnabYrf2rtqqL3jqZVB94XMCJS4mLzF8SVoPZxRVART7usCDEG8EwDzjbwjDfgbs706KVECmpqMgAe7dpkcvH54WtmBSeqCpYo7AgqonSSJEpcfPBtDjigAtlWNpPdpMBPWQP5YpTa6B5Lx7U8ep5LK/dFWeIQAggctRjl4Y8Q4jxfW7O9Kk7MSSxDSSdyTrxd8xxeiy3yLGQN6FI+PJxfAbHKVFn7LTQk7GkEgDlALYyjJeDNlVr1qLU0ZkTVpUBYqC0sCQb91TygnAtY0l9/LMp5BqjKT5SmLYMjlSO6jQeSLAnbkL7Y5bguXYkaHJHVm/rnhrYNFV7WiSW7OopN5FQH/wxfsjTfWFUq1ySpUiBYyTrn88B5D2NWtOim5AEneQL3vUG8WthxwytRpPqeoqsu+q20WIZT06+owHJG2OeG+z71O/UCqu5YiFG/uySbDmcccU4hk6QNOkn2iqN3LEKPMg39PniPN8RpZiQ2cqMoN1WpTCrzAMQfneMQfYEI+6FTUxB1NTD8otDX5eeJ35YSt1i9RizlVk3gSB8xO3+uC2yVNk00Veo5jvEaFU84M/xOH2R9nFQ6qyi/OoNAPkumPmTh8MzlaQ7o1sLAkagPILPyjDckutg4tr0U7hHsRqILa3b4grNpPmzGT9MPFoZTKghqiD/l0Rqb/E20/vYC9ouKvUKq2YHZkHuJTZZgEhYJBOwmTthAHJVyhQhQO6A0kFlWb2i/1wIxlL4KPjH9nY09o8yM3SNHL0VSxIZ2l2EEFbWWQdr3jpbzzM5RgyiqzEr3ArTKAW06Se6B8ufPF2y+X1yFzSqo5KpUHl+qT8/HbEi8NWdGuk72hfisQxMchpJ5CYw7gkhOeyGvwepmUyujSAgqlmYwo76wCYNzG0demOc7wnNi4p0oHxai5MbwTMdbKMMOGVOy1/eUwrFSNNTSIJO3ehoM3vcHDihxe8mvKx7vcIHjIM7dfXGjBM3Nx6KK3DswTBpgztqMavLUt8SH2bzdv/AKZzP6vZ/lGLpm+L02G1KpomSypC9b6vL5jGqdWiZLLlpmDAgSNxZvWMPx9CvI/JSBwKrr0NSZD0KvceEbeo54uXDjCUwO8NKgEXEAe95H88T/cr33sCDGhmC7rB38+fPGqagHSNrgeQO2FkqBysmwDnaXecrAYsSD46BB+g+WDKr6QWOwE/LC2vnUZ2UG4hiOcFBf6j54SrCircHBFWqyr3WW57NVUG3u7ye82o9fLE9XO9mSr9q1Mm3ZtGmx1IYIJuTczFtouu9lqYetWpkEfpCHAE++G0zM76rRzNxF++IM9Ko51oAXmDqmD3h8MYrgtRp+Bcn7aD6HFMvUaqWfs2I1AFGBkLEJAKqTGxNyT5YH/vnLhRpV6jKVjVIPh6DTtsMLqtfQ8OaZO/dIb6jHGTzChyzU5gDbqJ6YpGMYttLvs0pylFRbdLoZ0MxqmpToBSWSnIDEw2pibmLaOQG46YhThOZqvoBdEtOpyqiTcxN/kd8S5fiNaqpFNSqggqbhZ2I+R5Y4FPMsSTUAixi89cPaJ0y1UeLUqKijqDaBpnrHrjWKi3CHPxt9MZjcwcBe1NgYsfMeE4ZcEQ9vT599enUTjXFMqA8FVMRus9Rht7F5J6mYpgKCoqBmIEQoeOZ6wseOORtHWlosv9r+lRRRVUGWY6YUwIA5eJxSeAsqZiiWsFqo5g8tS3MC9h9MWH+0Co2Z4iKCrcRTUm192J8Jn5Y3xrhWWpClT/AEteFJIANJl2kNuNiJnriXLwFLyWrLcOoV0GZqgClT1MDtrBAMtADQLmDJknyxSON8Qos7GlTKUplT2dzaCSYmJvHjhlxb2p7WktJdFNE+FC3e0+78O1tjzvjzhaFTWp0PAYHla8k/QW8fPFMcXFIWbUmWqtXpsslQoBmQGUnwMmPlgezbQBad5Oxv6eW+N1qYaNTd6dIW9xNtvTFi4FwZ6lQPUpAUFEk69Kxt7xESDuBPmMUlJIWMbFXDuHGo6oiFrmInxMf0MWejw2lQM13h7EUk7zf4hcLaBJJ2MQcd+0vEVpIv2Q6BUkMaawpgsIWoQCIINhG3LmDwngyuUapXVST3UV9TMTa4F+e7RhHJ16DxJM77RuyilQpmmp+GkJduUs249L+Jwl4hw1hpqVlCg+6pg35lrkHf8AHFwyj0loB6a9lT51KkEkbCAJBYxYCTtgL7T2xbswF0C9SooquPEg9xP3O821hgPqkGL4ytgfszkqHfqNSZnBAQJTAJUTEMe6AJ88WzNhxTU5fTTJAm6lhJGq5mSAP9MVb2d49Tq1Ck1CynUhcqQwB70aUGk6ZOmSPljn249oc3lnpiioemyTJiQwYhgbbQUI8zjfbuJpTbldIlznCMxUkvqdo3Lzfl4bxjbcEqaYE0xOy3G8zdfMweZ3xWqXtdxCorMqNC+8Q9IfLUl8AV/bTPQSDWH/AMbf9qYpySVUTak3bZeW4LemKaiF8rd4NABjmPoMQ1+BVAlUJR06guzKSx10yTYge6Dy5YqeS9rM9UA0VnZrSpRVHlOgDGcU9p+I02A7VQCs3Cm/SdIvtyi464VOnaC02qZcavDmXu9hUMzHdhBY7gIV8ZMbAcpxFo7OQlPQWYEgIFsJ7w0gmJPPacU6j7X55mCCoKm1zT2mJJC8gZ+WC/8AaPPakQJSqlgbgWJHK7CLQb8iMNd6A0H1nAVT90lpIJLFTLW0gkiCSbdRbliFeyb/AIlUwDCJUAFo/wCJ3Z/dGIK/Gc0g++yKEdVX81BYW6HEfD+K03MI70TUGkqxlGHTULi1r33tg2kbbQ3zOWprSmQlUMNVOpVeym4YGR4cjufHHWXoU3p9oGLjtQg7IBbMqE6iNJsQbjw3xmb4VCVa1Vu3LQKYT3gCLT3bx4/njrgmRNMOHQ6f0uhGEqRzJ5i9wJPdHXB5WxaoA4jlqAoLUZDBYyGYORBC3N/1yd7ScAe0PEKRr02p9nUUhwQpBAJKFRMkEkBo8zOLFmK7Oi9lSTs95arqkGL7RyHPliqZyqa9dFamnZU5Z9GllJi120g9B4nnieWSjBy+AwtzSO/7wAOjs2DsFCUxIYsSe70AiDPKWnbEWfNenWetUZGcrDqBCLZTA8ABHpOOOJ5unSrKKaKKgUqGm4AEgc9t97QBtgc5p6tY5dzrdgJcWkaCDH7UG89DiUMqljUmq0WlBxlQw9kcuFdcw/ZprpyCGu7MxJqQwlZBI0i3THPHFmqbg7fh+W2Bq2S7GnSL1KgUGKYMHVENIAWwIg3gwMRqErM1UVHTU06WAFzqMDUBeFn54pHPDjdiODsWcS4RUphqgfUAbCLkdfzjz6YZ+wsszkmxUGCDuDYzttPzGIeKcRKhUpVNXdEuQLeAF79TgXg/GalKprZmqgiCrMecXHIGww8ckrphnCPcS8h4ERgem128/wCGJOH56nWTWhAGxB3B6G+MKqGbvC52t0H8MWIkbN/UYzElup+X8saxjC32qYFndXiCl7AEaXabgwIIwd7I5dpf706nphECdkxJaInUlgRtp73TFk9oMoanDmpgSSwFoFu0vc22xVMnxOrTqL2gRjSnUGFmCSNJ6sLw3hz58Dv2diaroi4NTNPPUlqHvCr+ye8CZBI8QflgjjfGFSnTypCO9KFaoCTq0iLMF90kmV5FcCrnWphwnYKlTukVW7zC0jVEDl7oU23x3msqqu7KA5YiHN7m5AJAmOdrnFIY1KW30JPI4roUlkMkJHOzH8xjjL1qcyq8vMjruIHni4cB4B2lItUVmaT3Wbs1J3GoFIZYI2nmIG5fZLgGWo0w1SmFqNLFwUsvJe+IEAzMT44rSWif3G3dIqnBcyEZahRWLSFRqTMCY8GBczyIgztacWyhwrN1iWqMpB/R9oFIQbgqgLLcWjl9cc5XKUO1NRELhFLMTU162MaVU+7LFgDG4JGGHE6tFX7J0qPpQQVcrFouJAJsL+OEcdh5prpAWb9l6rLTHaU+4CCSWHxMwA7pix+mJOFcJ+zMa1Q0SFE2diRcd4ApE8ot72AjwWlXZeyNSnJg9oqNcC6iDuOhF4kTGJsz7LO2XKU2I1wx7sa0BuhK+6SpOk+N9hBa/GmxU93Qlz/EHrslJDpU7R8FOwseRIIEjct4QHDUlpUBSQKgqkyByprCk+REiejoeWA+GcNqU8xWdkdAQi0tS7ldctYQAXZWibD9043xHNBqtXT7lOKKgHYASSPMFB/gw6ivAtkZNCnUoseyp6qgVWUKJ1BgQDFwVPLBXtdlWekIBLo2wEm/dcDwLAbcsLm4aalCaZJakZXUdRAKuhYTJJAPP8YxYMwe0o6ngaqeozBEgQ29twDB64ePkWTBaHDEfLZliqiFOk33gTawMeXxemKXxnJuKS1Gdu6dKgnkZti/8KecrUFi/ZvKBhJMKBA6nT/U4qfHMjXqinTWjUWCzSVMSB3QSFtcx8+mJR/V6+B/+SK/wmrpDMIkvpHLaefqcOa2Qp9oO1UODTJpkmYcOuq3TTMKbedjhDwDhGapOXqUahVSG9xmOq94F+X1GLRm8zVrqg7CqFpFD+idSQQVMaveIG8CLC9xgwpLYJ3ejo1aglaaIsN/u0Y2mAoAWDuD/rhZVpuCaoBGipMhYVTqOlet1EeuHevORKU2EMzJ904sZJuUPesogiN72uuzHDs6zNdxSZpan2ZOrvGGJCbxpMed7Xs2mqIRUlK2dVqtWrTNXU1REOqCFGkEAEd0d6DqBMWEHAeaSnVqwyqqlYpsAFk2Cqxi+95m+DMrk80lKoEpVQf1dDAMDYrsPn+1PLHGZ4PUOkJQzGkgagaTDS0CSOoJkx6dIlJXsvF06B0Wtlg11q0g5Uq2wgkeOjw3XynDbhVSnVJKOQQL02N1nysRyB8DfDTgGVrFXWrSYNqJnSYYHn03wg4j7M11bVSpOO80AFQV2jSSfdMm1/d6EYDSW0FO9M1xdexlDTJRpJWSoc7i4g74g9lcq7IxiBI8DEqDeD4AjpfEueylXszUq0ytVR71Mq2sDYMurf1mYg8sD/a4pUAuzVWLahp0wdJkMpAueYG0zjlyxkoSUV2mPBRck33rYLxXKqKlU6dTGnNlJIALE7C1o6eWF60O0zvaJIXShRoKq3dhwDtfp54dcZzRp1qqjd1AW0yWkEd2L2F7xHObC5hGRRyIMgbY4l9Q4QjyWtf5OrgpN18kmfYaX1BAadRNWkEEH7qS0+8SBuOWE3tTxY3ppUDaveZRFgTpAvzFz6DzXZ/MZhmdtTuGJJvPOYieW1umF9XJ1mGsoQNLOJtKpGqPKRjpw4oVraTtEpSd7OO0xsPOB0WN8SLjqELZ/Z27GrVX4dAJ8wYH0LfLFrSn3n/eH/auK3/ZjTOqs0HZB/3/AMMW5UhntFx/2gfljox/qQn+xH2eMwTrX9YfMY1iloWmK+OL2uXpFapKORaT3tDAsIO5JVr+BPPCvLaTqlVLQ2okyYA7w09IUif431w3NU2Soi1DUFJKbU2ggkK0uSLmRA7x5E4UZLiCq9WA3fRhLix1bwJsBy33x5vFpNM7VK469iE592hiT/DwGLn/AGc8cg1Fq1IWB2epjCm41G8QJmP2Rip8bRBmKoXuqGNrW8oAEbcrYl4XkdZVaYLvIY6b2kD6H8cUXsRqnR7glSnoDu0U6aspQj3iCG1/rAXIjmbcrwKrVKtKrUaogpqRU7vcfTuSSRBYy0KrWYTFsVpuImtlQAhTSdHWy9mFPUExMeOHPD+JU6iFqTEjQGMgKD3kOoL7wJkSDtbmTNI26Iy0NfaEU1FOGdPvKcBFs8d1VI+FRqvblHQYUcXrCsSzZapUdmg9mzU1VUdmp6qhQqSTNt7eQwn9suIshQr8CFgOUtqJB8D2dxzv1w+r5gUzUqaXq0wwDfeEsgMabEwdyvoL3wWqYE3VkicV0pU+4emyICA7gzUJ+7XTpALEmAbA+IjDrh3ElpnsqpgwIN2v8WsnclpMi0EYR8KemxLU9JRtEHSRZZgEEmCNrcxiWrU1HvXw3FNA5NFoy+fpO9RadRXdANQBmJvflJt9MBcTeiUdnpamUGwAljyUeJNvXCQZpk09m2mPDcHk3X12xMeJF/eGlvofLGWPZnPQm9qczSy3Z00UCpVEsNRPZarG8gMfeAm29r3A4vxE5ii+VpMadQBai6u6HAEjSTaDV0rfks3G6/PcSSo4NTUXapUZAp7pQKwUkxMwaewOxxzQZwgJ1Zqlp1aFYqQJUFFiSdMVCBcHVGDZuxhx7jK0KFJaf3VUomswSxWGBcSIhmAvJ2OI+B8ZzdSGjMVKdwGSipFpiWKxyvhvQXJrpZJBQKoBpq2hRMLfu6bz3b+GLTwyvNJCoU6hb7sydoJEW3J2+IDlhZSoKVlT/vatu3ageCUx+M4z+/3A3rz/APj/APXAPEeGpmK9RXCBxT0hqa6bgjVbmJkgHbUes4BzHAVqgCmEAVoJWZJUgGT1BB2642wUvZYslxapUBK1qoKmGV9IYdJiLHkRjdXPVyDFSoTGwMHrbvYKqZkmslWnQUMqMrqW98NBHw2hgSN/eONZ3jDAaTTpq3RG1N8ikC3U42/QNexLmM9V7Mt2uYke8BVggSQSQT1GE1fMZh20pUzDEiR9/wAvliwU8w5lUpk67EMRABO5jYTglOFVqgNOq7kqeRBWDs1zaeQ8NhjMKKtTXNrdlzFS1wuauPMAE/LCPi/EqzN3DVp6RBXtXYz1M3nF5zfs/URwVEiwBAAEknVsZECDJnwFrqPaDiXZUXWpD2Gkm5sQdJN9SsDB6T0xgld9l+G56tWRqYYlSb1C2kdVaxMETt9DGLrxbhL02NV6a03LCyvqEzqsSFYsx1Ad2Zt0xxwKgUakwinaQiD3RpLEDux1G3zw/SM8lKuqvTQnZwAx0MRe9gZmZ5+mFaGsq/EnH2nKqT3Xe5MA7ERccwdxf5459q6dNY72gFyNUarAGBHyvh7xvh4Vr9mymAIqXJ3JIsEA21TJJ2thNxHh9SovYu2rUv3bWIDAXAYe83IWEweuJY/p4KKjJJ18fIZZJNtp0V+nQpHSVZ3u09yNlYxZrC0zgfPcN006jB/u6NOqiib95yoDW2hT6acO/ZhEWi5IYknSpKgGWGlrbrYGQeRwt405C5pCpAIBmGBMkt0ggAx6DpisccY3xVA5uVWUoE7xb8fTGyh8hjbm/XEms4UoP/YvhprCoup1giWBsAQb+LWIHnPKMWJ+ALqKdpVIMX1bd1r7Wuv1xXfZLPLTWoT2HeYWqsV2B92Fbr9MP8rmqbPUYfZ4KA6VbVtvPcFtj6YvFLiiEn+TJv8AZ9P+JV/zfyxmI/tlP9XLf5//AOeMxTQgxp5UIKkBRqQEhRv3hBNrnSFF/wBXEdDhlAn9EgBHNZPlgvL0WaH7TukBY6CbH52/xYa0ckJFzcx+f5fXHnJrujua8WeSe2WX/wDq3ppT02EADcadTN+N/wBnDX2DyrvSrBZElII3Gk6mHqCo9cT+1LKubzbz+jpMAx/XZEpR6Crh1/ZlwbXl+2Z2XW7RpiCohbyD8StinKkTq2RUzFJ6Tq33rd/vDWDyYG94AHoOmGPA6TUcwmXdp7RXCBVtsGAJj3opiwtM+jqvwDLhlbS+oGVKzY/mPPEXEqeqoIp1ZBswRhG1wQIxoZNglBFe9uyVazMjPTUKRNyGa246gzfbEvDs7XZRUNWpLk6+8QD1kdLna2HPtFwhayozrLIIUmQL6SSYi/dgXHvHc3xUabpSApV2qFhPdICq/lfSTtvfFHLyIo6oYZCq6ZrLEMNJZ0YCysCQAVAGmQ63JvEeOLRUFj5Y8wr8XhklatMKwKStwAVawMDfULdZx6lUSRI2O3rtjKaZpQkltENVMD5xtNN2/VVj8gTieTAPgMCcUqfcVf8A7bfhg8xeJSKdL7xFAJbQ0Hcmwj6g7YCymYY1ERKhRUJKkE9Sxa1+8STewnBiZdtFWs9VVYa2Wn7xCTKibX6Hwwt4XTJWo0yQgprPVyEn/rn0wLHPU+A5pGH2mpTlTQcMAp9+nqZgoMcgx0z8UTvgw8Wp5SitTVVq06tQlWDTCsq1F0gmPdMRgH2cyr0sprC6jSq66TE7toKvIFyIm1pLdcPONcHarlzTq6LLr1Jb7y8FRECFIEzsLzjdg6EDcSY1u2p1AUZTKsoOlomD8QFxEm8Y5zHF6qRJpib6TTWfHYdZxVsm9WjX74AOod5h3SIbvGdwAFt+ze84tr8Och6gpJVfUpeX1uBZpEgABgLAcueGuhKFv2lQr1OypHSpYkKwJPo/hvg/UCuhMvT7aTpOghIsxv2gNlIvB8Sb4mpZhq6P92tOmV0EgAWmVQQbSfpOAMzTeqdAdqQVrlaqrqGwmR0m3gPDDWAJ7XN06Wp6VKnULwrLTZ1IMG0A/CSOYt6YnXNVyz6NfZtGlex0i1iSSo3Nt+WF3D6YpKKZzL6J/wB5W7XTBhVUSQBEbDD/AIflXcxSzA0gyBJBJgGxIuPED5QcLYf4Iic0EkUqkSb/AHYN7m2oHrMdcJauaqdm1VhWCiNXegywLCIaZgHbwxYuNAJUpp2hVoMklnBsCJDEwfHx8cJOJ5+nZKlRgSQdShCD0tNz8uWMgshV6x0sAzAyZNTbzmd9rTjnPs7oyEKLNJWodRGmZHcjlbBeTz9HtCHbu6ZDRHkGUeF7EXjA2bzdNWYKTUBnnEAk2AJna2CKKsvnaYZ3qU6i90E312HIiQBzvcWxYctwqnVBPaqmWRSGLKqy7WAP7IkG5vqjAfF8tQ7JxTqISVF9ckgSQIFvQHngp2WhqHZpUBYFkYAqSdi0yoImZN8Z/AV2AV+E1ErKmtyqQrjlNwGYk6ugMyJgzfCPPZd6naKXMEuoGoxBlRbyw545xeu9cBmFIBRZBEixTbeV5eI2iMd5TIVWFkUdWc9bkhRPPkYw0H7NI8ldSDEXFsaqEgSV+uG/tVkjSzVWnudWoECAdQDW8JJ+WF9RJVjyiR6XI+mD9uIObLXwfghFNPvAC41HuSASBYmLWx02Sp0XJqV6QLo4+ObqQNvEjHoqVYEACB0/0x5l7eZt6mZdKgUimSE02sQGE3vyxSGO9COdGU0WBGZojwv+ZON4rfZeH1/njMV+2vYOZ6vkq6sIWCu1jb8cOOHpJAsRImfAyPrhPkqZUAFgT1gD+vniycHpypm8XnHkM7iMZVNROkSd7DBlCnGw/LG4xNSwQBCpYb/PGOhPPHdM2xtxjGF+YRoMYqHtLwY1FPcnqrCR6dN/9MXtnxBVWcBSo1Hl2S4LVVYpmRzo1hqAHgTcYvfCCWooSkd0WmYIsR6R9MFV8mreB6jAmqpSBvqXodvXpgJq7C7Zw9MaRG0YXcRT7qqP+W//AGnDTKujgqDBkkA73JMA7MASYG4EC+Bswghh1BH0IxZOyTVFH4xam1QOPvKKiJGr3wII35n0G+0rvZ+jCqD8Van/AO3/AI4gFftKlVdMFdNP/Jq/MkemGfDUgUybAV0k+QfDJGfRacvxJ6VFqY+Mo46BlIMx4wPljujXXUjo4LKbydJNtuRA8umBOMZqkgGp1EDaZPyGKjx/ifd0hCJIgtuRcyB08cNdCVZe8/mswFUx2hLDUGVXgGxO02nfHNMMlGq2mkG7xEKFHdnTMQLc8VD2X4lVJI1tsPiDAQCdpMT+RwbU9qQdeXfTJXTNxLMIPI7E+v0wVIziyx8CbWWDVEE2HcJJgt39QaII/Z2G+D2o0VY6qrkr7zJSBVeoAaWMX2B+hxX+D8Tp06lNai6NQMaBJ9y/rcc8P2OWar24zAkNIYQLgn/mDYyPmOuFk2NFIaUuBK4B7XMMu47oA5RA7M4aZRGRj3q7j9oLH/UAdumEmc9oqSrfOofVAR5/eYAzHtbk1tUzTk9A4/AKcK2xkhhx/gVCsSaqMxJnvVQv0Wp+WFKezmUpk6aNK/V2b/xMjwxwfajJEwpqOZjdv/1riCv7TUBU7IU3LTFtRvEx+k/LBQGgo8LoCPu6Ntu5qj5qMSijTHwqI2hAPzwjyftP2tQ0kylQOFLRUUKSAyg+9P6ww2yGaqMqs9JaRPwWJHO5AGGuhaJWC/1AwPVy4/1E/lg0Fm5n54rVDO1XVNTd7WFaBF9YU8v6nGdmRxxFCrqdRO3wkc9h1xcWrQLR6qD+OOdAsYFtrbYhricViqJydlK/tOyQcJmFgMDoaABIuym3Qg/5vDFLW6t+0CD5xGoY9F9t0JylWNwUN/3gPwJx5qWsR0xRAPbaeagRoTz73/thNxPgOXq1GqurBm3Ic9AOp5DB6tYTyGAc3mqnwL6m+Cm1tC1Yu/2Pyv8AzP8A5T/64zGmr1z/AEMZgcv5G4/IdTY9cW72VqdxwTyxTUewxZvZVzMRY481nYNGa8YnU4grOofvGBPPErZmmT3ZI8jgJmonV4xJWqfxxA7rH8scNWPIA2wwGR1amNdpgPMV4N/xj8jjEzA/o/yGA4M3IKZ8Qu52xx9oHQfX+OIqmZH9AYHA3IC4llJuvdP0+m3mML04wyns6o1ePxR+Djbx8cMM26v7wmOuFecoUyI7NY8BH4YeKaA9gScFoim1Se1mozMynQwVrhXJBAuTcifHCGpQb7QaU9nTgNpDAtBMA3F7gXAGDs5QZZgF0Igj4o8o7wvt+OK9xHhus60YrpAC3NoJ7sfCB4WucVFLVRySIw0KRY94gNJ2G9xETaAcBe0FdEE1KisQoBWBOqd4mR5dMVJ81Vp92pqjkwJxrs6TnV3iTvf+d/rgSn8DQxpq2yXI8UNKezCGd5J/rriLhzqaitUYMWcGQJMk7AW5+PPEn2RVN0sOYuD5wN8S0KmV1BqgeVIhVAXmDLTBxJ5V6bLPClHlyX8eS08SzQp0nawZaWqPp5e8QMedU6q6tRhjz1yZ87z8ji58d4mqO1NkWoNygBkgnUo7TpsYAO8YWrxID9HlKY/eBb8SMDJOSdRi3/ZKEVW2S+znFcvTMVMmrA81dyPCEqMQf82GfH8/lKve+zMrSSXBWmdhe2oHYb9MK8txOtrGqnTCfEFpidj1PXxxY8pkqFWj2hRjpBZtChbCetzYbYjl+qlhVyS9ey2PHjk3dinJcJd6lJkpPTphgzF6mrUJUiLLyB2HxeGLTk6aUmLCmJ/W94/MycVjKZ2irHQXpCbSdPzjuH1xZMrnXI3Vx1I39Rb6YfH9dii/9xNP5WieXFKX6VSH/D3LqSD9McZkQDLAHcWxBwriNMGGBXyEj6X+mD+LVqTLCHUYsAL471lxSjdpo5eEovoSVc5UsqAyTG49dPj4mI38ML6uRrJVQgp2fayAgEhZ1ANzEaQLeGDslw9zVRnQgKZ6j1xPnHio4A544I/UPL9U8cWuKV+7Ol41DHya2w4Z04ibOHwwEK3ljjXPT0x6mjl4ij29z33QoidTkN4EKZK/SflijVUtqA7pF/DwOLTmqWYlg8VFJJhmPWQLQOm2ET8MOsysAn3VMj5EGMT+5T2P9ptaPUsrdVIPIR8sdVFOA+GsRSpq3vBFBjqAMTVKsbE4ukQZ1q8PpjWIftLePyxmNQBZRooNh9SfxxZPZVELaGAg+GK4gw44BUioMea1o7UyxZjKCm8xIHXBWTqozSVgeGBuK1Zi/LriDh9aGwqQyZZamVpsJEYR5s6GsdsPWrzTnwxWM9Vk4eG2Cekc5hg1yMRMBe2OqLg45c4q0SshqHEWO3bHEYVhOWGIqiYlIxwRgBAqlLC3PcNVjqXut1HPzHPDx0xwaOCYpmaykECovWD8LTa/Q/1fCvOcCA71M6T0O3ofyx6FWyoIgicLMzwtgO5H7pwbT7BtdFHoZqpRYh1nkf6/1w1y1ahVgEAHxsfTB5y6yy1FNzJDbiwFvC2F+d4BA1UzPhN8Tniva0xlPwwkcKXdSPLnjBkPDAGU4jUpd1wWUb9Rh/w7N0qw96G8TeJ3xCU54/3Vr2iiSfTAlyY8MWP2fojsKibSpG076v44HqZQgWvgvg5IFRCpBAtbfHD/AKlOMsFw3TT/AIK4E1KmdZb2fpj3qer96B+eC8nw2mmoKiIJ2UDn1kbzOOXpHVeoo/xSdwdQ6ExEY7o5ulTlWqL1HLck7Y8fLnzTWptv0kzpjCC8Bf2dQLSOViR+GK7S9ptUAk0z0ZbT+9dfrhlX9oaC7vPkI/GMVytxHK0yGTtGYbsSTaOkxhvpvp8uSMvvRk34/wDQTkotcWhvVz7l6X3hjWNWljBHjBiMdZ+oGruBO4uR3dgd9sA0/aHKlDpempj4u6w3uoIgmdtxiA8UY0KOgCo4ntB7s8gQYifkMd308MmFqeKLuqpr+yc3GepPQ3ag4WdJjaRcfMYX1XYbYhocfQHvh6JAABaQpN/iFjywTw3if2kuwpFQpABN5+f8eePY+l+qzZJOGSFNefByZMcYK4uwOrqIPPzxDlMuxIYgn0J/DFhFFmj3V8QAD6e8MTZTIBTJZmPjf+X0x2+dkubSIsnLAADvAbC/5z9MG0crVB1dm3qCtv8AFpwUGaIBMY5KnrinMkyDWf1V/wAw/hjWJ+zxmF5AK4jYZ8GHfGMxmOaXR0oeZ44GpPBxvGYVdB8j3L5r7sg4S5ppJxmMw2MGQiUYx8bxmLkSE42MZjMSZRGjjkjGYzACa046GMxmMY3GOSmMxmMYHzeSSoIYeR5jyOEebyzUTMyvXmPMfwxmMw6FkCnKoxfV8ZBEDbuhY+k+uE2c4MyHUreu3qR+e+MxmGkkLFuyfJ8bq04Dww2HX0O/z+ZxYMpxkFdQuvNWExa/LeJ2jG8Zjz/qMMKujqhJ0LayGsxenUYIbadoIA1Dbr0tja8GHxMx/wARxvGYrjgowVCyk7J6XB6Qju4IOUSPdGMxmKIUHfh1EmezUnywTRy4X3VA+n4YzGYKQp01AHePljn7EAZWx6i2MxmHQGTU81UUxIbz/jg6hxJTvK/Uf16YzGYZCtIPRueML4zGYYmZrxmMxmAA/9k="
                  />
                  <Card.Body>
                    <Card.Text>Manufactor and Automobile</Card.Text>
                  </Card.Body>
                </Card>
                {/* <img className="below-onec" src="https://images.financialexpress.com/2017/09/Passenger-vehicle-small.jpg" alt="image-two" /> */}
              </div>
            </Col>
            <Col>
              <div>
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="https://knowlab.in/wp-content/uploads/2020/10/Tthree-ways-your-company-can-benefit-from-collaborating-with-other-companies.jpg"
                  />
                  <Card.Body>
                    <Card.Text>Others</Card.Text>
                  </Card.Body>
                </Card>
                {/* <img className="below-onec" src="https://knowlab.in/wp-content/uploads/2020/10/Tthree-ways-your-company-can-benefit-from-collaborating-with-other-companies.jpg" alt="image-two" /> */}
              </div>
            </Col>
          </Row>
        </div>

        <div className=" third-content">
          <Row className="row-four">
            <Col>
              <div className="sole-prop">
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="https://www.aanoorglobal.com/wp-content/themes/aanoor/assets/images/services/proprietorship-company-img.jpg"
                  />
                  <Card.Body>
                    <Card.Text>Sole Properatorship</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div>
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="https://image.jimcdn.com/app/cms/image/transf/none/path/s821245e45fc67225/image/i4526d1f4f4b7ffef/version/1580376087/image.jpg"
                  />
                  <Card.Body>
                    <Card.Text>Partnership</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div>
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="https://www.aanoorglobal.com/wp-content/themes/aanoor/assets/images/services/pvt-registration-img.jpg"
                  />
                  <Card.Body>
                    <Card.Text>Private limited</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div>
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="https://blog.ipleaders.in/wp-content/uploads/2016/07/llp.png"
                  />
                  <Card.Body>
                    <Card.Text>LLP</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div>
                <Card className="card-one">
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvDokGO-sUrRYRzVKHl8UC3H4mS4J3cswhvqi1tTYYaX5DcYGpblzDGchWZt84QKvkMs&usqp=CAU"
                  />
                  <Card.Body>
                    <Card.Text>Public Limited</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* <Col md={2}>
          <div>
            hello
            </div>
        </Col> */}
          </Row>
        </div>

        <div className="footer">
          <Row className="row-last">
            {/* <Col md={2}>
        <div className="img-one">
            hello
        </div>
        </Col> */}
            <Col md={2}>
              <div className="Business">
                <h5>Businesses</h5>
                <hr />
                <li>Businesses For Sale</li>
                <li>Inverstment Oppertunities</li>
                <li>Business Assets For sale</li>
                <br />
              </div>
            </Col>
            <Col md={2}>
              <div className="investors-one">
                <h5>Investors</h5>
                <hr />
                <li>Individual Investors</li>
                <li>Business Buyers</li>
                <li>Corporate Investors</li>
                <li>Venture Capital Firms</li>
                <li>Private Equality Firms</li>
                <li>Business Lenders</li>
                <br />
              </div>
            </Col>
            <Col md={2}>
              <div className="advisors">
                <h5>Advisors</h5>
                <hr />
                <li>Business Seeking</li>
                <li>Company Secratory</li>
                <div className="franchesis">
                  <h5>Franchises</h5>
                  <hr />
                  <li>Franchises For Sale</li>
                  <li>Franchises Investors</li>
                </div>
                <br />
              </div>
            </Col>
            <Col md={2}>
              <div className="get-started">
                <h5>Get Started</h5>
                <hr />
                <li>Sell Your Business</li>
                <li>Finance Your Business</li>
                <li>Buy a Business</li>
                <li>invest in a Business</li>
                <li>Value Your Business</li>
                <li>Register as Advisor</li>
                <br />
              </div>
            </Col>
            <Col md={2}>
              <div className="Company">
                <h5>Company</h5>
                <hr />
                <li>About</li>
                <li>Testimonials</li>
                <li>Blog</li>
                <li>FAQs</li>
                <br />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Headercomp;
