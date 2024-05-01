import Flicking from "@egjs/react-flicking";

export default () => (
  <Flicking
    align="prev"
    circular={true}
    onMoveEnd={e => {
      console.log(e);
    }}>
    <div className="panel">1</div>
    <div className="panel">2</div>
    <div className="panel">3</div>
  </Flicking>
)