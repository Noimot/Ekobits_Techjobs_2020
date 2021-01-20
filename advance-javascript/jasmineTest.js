describe("jasmine Testing", () => {
    it("replace characters regardless of the case", () => {
        expect(replaceWith("awesome", "e", "z")).toEqual("awzsomz")
    })
    it("make copies of numbers in the array", function () {
        expect(expand([1, 2, 3], 1)).toEqual([1, 2, 3])
    })
    it("NaN should return false", function () {
        expect(acceptNumbersOnly(NaN)).toBe(false)
    })
    it("numbers should return true", function () {
        expect(acceptNumbersOnly(23)).toBe(true)
    })
    it("string should return false", function () {
        expect(acceptNumbersOnly("23")).toBe(false)
    })
    it('sort and join two arrays', function () {
        expect(mergeArrays([2, 1], [3, 4])).toEqual([1, 2, 3, 4])
    })
    it("merge two objects and overwrite duplicate keys", function(){
        expect(mergerObjects()).toEqual({ name: "Foo", test: "thing",  num: 55})
    })
})

function replaceWith(str, elem1, elem2) {
    return str.split(elem1).join(elem2);
}

function expand(arr, num) {
    let copiedArr = arr.slice();
    for (let a = 1; a < num; a++) {
        for (let i = 0; i < arr.length; i++) {
            copiedArr.push(arr[i])
        }
    }
    return copiedArr;
}

function acceptNumbersOnly(num) {
    if (isNaN(num)) {
        return false
    }
    else if (typeof (num) === "string") {
        return false;
    }
    else if (typeof (num) === "number") {
        return true
    }
}

function mergeArrays(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i])
    }
    return arr1.sort((a, b) => a - b)
}

function mergerObjects() {
    var obj1 = {
        name: "Foo",
        num: 33
    }
    var obj2 = {
        test: "thing",
        num: 55
    };
    let mergedObjs = { ...obj1, ...obj2 }
    return mergedObjs
}

