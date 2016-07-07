suite('CSSTransformComponent', function() {
  test('asMatrix and is2D methods throw errors', function() {
    var component = new typedOM.internal.CSSTransformComponent();
    assert.throws(function() { component.asMatrix() });
    assert.throws(function() { component.is2D() });
  });
});
