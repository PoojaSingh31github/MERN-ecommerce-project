import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
function Homecover() {
  return (
    <>
    <Card className="text-center mt-5 custom">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Review</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <a href='/product'><Button variant="primary"> Go to All products</Button></a>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    <h2 className="text-center mt-5 mb-5 custom">Have any question... ask to ous team</h2>
    <Stack direction="horizontal" gap={3} className='custom'>
      <Form.Control className="me-auto" placeholder="question..." />
      <Button variant="info">Submit</Button>
      <div className="vr" />
      <Button variant="outline-danger">Reset</Button>
    </Stack>
    </>
  );
}

export default Homecover;