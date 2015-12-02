/**
 * Created by phuongnh on 02/12/2015.
 */
function giaithua(n) {
    if (typeof(n) != "number") {
        return NaN;
    }

    if (n === parseInt(n)) {
        if (n <= 1) {
            return 1;
        }

        else {
            var ketqua = 1;
            for (var i = 2; i <= n; i++) {
                ketqua = ketqua * i;
            }
            return ketqua;
        }
    }
}
console.log(giaithua(9));

