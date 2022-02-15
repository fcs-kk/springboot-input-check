
/**
 * 定数
 */ 
var COLOR_ERROR_MESSAGE = "red";
var COLOR_DEFAULT_BACKGROUND = '#FFFFFF' ;
var COLOR_ERROR_BACKGROUND = '#ffc0cb' ;

/**
 * 数値判定（符号なし整数）
 * @param  {Object} val 値
 * @return {Boolean} true:数値、false:数値外
 */
 function isNumber(val) {
  var regexp = new RegExp(/^[-]?([1-9]\d*|0)$/);
  return regexp.test(val);
}

/**
 * 数値判定（符号なし小数）
 * @param  {Object} val 値
 * @return {Boolean} true:数値、false:数値外
 */
function isDecimal(val) {
    var regexp = new RegExp(/^([1-9]\d*|0)(\.\d+)?$/);
    return regexp.test(val);
}

/**
 * 値の範囲チェック
 * @param  {Object} targetElement inputオブジェクト
 * @param  {Number} min 最小値
 * @param  {Number} max 最大値
 * @param  {Boolean} withDecimal 小数点あり
 * @return {Boolean} true:範囲内、false:範囲外
 */
function checkNumberRange(targetElement, min, max, withDecimal) {
    // 対象エレメントを取得
    if (!targetElement) {
      // 返り値に範囲外を返す
      return false;
    }

    // ブランクは不正
    if (targetElement.value == "") {
      // 返り値に範囲外を返す
      return false;
    }

    if (withDecimal) {
      // 数値以外は不正
      if (isDecimal(targetElement.value) == false) {
        // 返り値に範囲外を返す
        return false;
      }
    }
    else {
      // 整数以外は不正
      if (isNumber(targetElement.value) == false) {
        // 返り値に範囲外を返す
        return false;
      }
    }

    // 範囲外は不正
    if (targetElement.value < min ||  max < targetElement.value) {
      // 返り値に範囲外を返す
      return false;
    }

    // 返り値に範囲内を返す
    return true;
}