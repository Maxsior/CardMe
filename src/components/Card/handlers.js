function initRotationHandler(scope) {
  let origin;

  function calcAngle(x, y) {
    const dx = x - origin[0];
    const dy = y - origin[1];
    return Math.atan2(dx, -dy);
  }

  function move(event) {
    const angle = calcAngle(event.pageX, event.pageY);
    scope.setState({ rotation: angle });
  }

  function end(event) {
    move(event);
    window.removeEventListener('mousemove', move);
    window.removeEventListener('mouseup', end);
  }

  function start(event) {
    const elemRect = event.target.parentElement.parentElement.getBoundingClientRect();
    origin = [
      elemRect.x + elemRect.width / 2,
      elemRect.y + elemRect.height / 2,
    ];
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);
  }

  return start;
}

function initMovementHandler(scope) {
  let down;
  let onDownPosition;

  function calcDistance(x, y) {
    const dx = x - down[0];
    const dy = y - down[1];
    return [dx, dy];
  }

  function move(event) {
    const delta = calcDistance(event.pageX, event.pageY);
    scope.setState({
      position: [
        onDownPosition[0] + delta[0],
        onDownPosition[1] + delta[1],
      ],
    });
  }

  function end(event) {
    move(event);
    window.removeEventListener('mousemove', move);
    window.removeEventListener('mouseup', end);
  }

  function start(event) {
    down = [event.pageX, event.pageY];
    onDownPosition = scope.state.position;
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);
  }

  return start;
}

export default { initRotationHandler, initMovementHandler };
