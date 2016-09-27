function insertTimestamp(context, params, content)
{
  if (context.inputType.search('json') >= 0) {
    var result = content.toObject();
    if (context.acceptTypes) {                 /* read */
      result.readTimestamp = fn.currentDateTime();
    } else {                                   /* write */
      result.writeTimestamp = fn.currentDateTime();
    }
    if (params.foo) {
      result.foo = params.foo;
    }
    if (params.mark) {
      result.mark = params.mark;
    }
    if (params.no) {
      result.no = params.no;
    }
    return result;
  } else {
    /* Pass thru for non-JSON documents */
    return content;
  }
};

exports.transform = insertTimestamp;
