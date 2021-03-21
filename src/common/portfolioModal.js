import {
    Modal,
    Carousel
} from 'react-bootstrap';

const PortfolioModal = (props) => {
  const { portfolio } = props;
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Header closeButton>
          <h4 className="text-info text-center w-100">
            {
              portfolio && portfolio.title ? portfolio.title : null
            }
          </h4>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Carousel slide={false} fade={false}>
          {
            portfolio && portfolio.images && portfolio.images.length > 0 &&
            portfolio.images.map((item, index) => {
              return(
                <Carousel.Item key={"portfolio - " + index}>
                  <img
                    className="d-block w-100"
                    src={item}
                    alt="img"
                  />
                </Carousel.Item>
            )})
          }
        </Carousel>
      </Modal.Body>
    </Modal>
  );
}

export default PortfolioModal;

