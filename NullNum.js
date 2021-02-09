class NullNum {
	constructor(input) {
		if (typeof input == "string") input = NullNum.valFromString(input);
		if (typeof input == "boolean") input = NullNum.valFromBoolean(input);
		if (typeof input == "undefined") input = 0;
		if (typeof input == "null") input = 0;
		if (typeof input == "symbol") input = NullNum.valFromString(input.toString().slice(7, -1));
		if (typeof input == "bigint") input = Number(input);
		if (typeof input == "number" && input !== 0) input = Math.sign(input) * Infinity;
		if (input instanceof NullNum) input = input.val;
		if (input == 0) input = 0;
		this.val = input;
	}

	static valFromString(string) {
		let val = parseFloat(string.trim());
		if (isNaN(val)) val = NaN;
		else if (val < 0) val = -Infinity;
		else if (val > 0) val = Infinity;
		return val;
	}

	static valFromBoolean(bool) {
		if (bool) return Infinity;
		return 0;
	}

	static add(a, b) {
		a = new NullNum(a);
		b = new NullNum(b);
		return new NullNum(a.val + b.val);
	}
	add(b) {
		return NullNum.add(this, b);
	}
	static sub(a, b) {
		a = new NullNum(a);
		b = new NullNum(b);
		return new NullNum(a.val - b.val);
	}
	sub(b) {
		return NullNum.sub(this, b);
	}
	static mul(a, b) {
		a = new NullNum(a);
		b = new NullNum(b);
		return new NullNum(a.val * b.val);
	}
	mul(b) {
		return NullNum.mul(this, b);
	}
	static div(a, b) {
		a = new NullNum(a);
		b = new NullNum(b);
		if (a.val == 0 && b.val == 0) return new NullNum(NaN);
		return new NullNum(a.val / b.val);
	}
	div(b) {
		return NullNum.div(this, b);
	}
	static pow(a, b) {
		a = new NullNum(a);
		b = new NullNum(b);
		if (a.val == 0 && b.val == 0) return new NullNum(NaN);
		return new NullNum(a.val ** b.val);
	}
	pow(b) {
		return NullNum.pow(this, b);
	}
}
