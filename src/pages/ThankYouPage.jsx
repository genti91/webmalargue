import ThankYouPage from "../components/ThankYou";

const Landing_2 = () => {
  return (
    <>
      <ThankYouPage />
      <a
        href="https://wa.me/5491163622778?text=Hola Expreso Malargue, Estoy buscando información sobre encomiendas!"
        class="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
  );
};
export default Landing_2;
