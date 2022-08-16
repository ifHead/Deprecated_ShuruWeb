let globalMx = 0;

//sa is sketch A, a is for sketch a, b, c ...
const sa = (a) => {
	let x = 100;
	let y = 100;
	let rectX = 0;
	let clr;
	let cnv;
	let mouseOn = true;

	a.setup = () => {
		cnv = a.createCanvas(a.windowWidth, a.windowHeight);
		a.noCursor();
		clr = a.color(255, 0, 0);
		cnv.mouseClicked(aMouseClicked);
		cnv.mousePressed(aMousePressed);
		cnv.mouseReleased(aMouseReleased);
		cnv.mouseOver(aMouseOver);
		cnv.mouseOut(aMouseOut);

		//인스턴스 모드 용 resizeCanvas
		a.watchWindowSize();
	};

	a.draw = () => {
		a.clear();
		a.fill(255);
		a.rect(x, y, 50, 50);
		rectX = rectX += 1; // Move Rectangle

		a.fill(255);

		if (mouseOn)
			a.ellipse(a.mouseX, a.mouseY, 10, 10);

		a.fill(clr);
		a.rect(rectX, 40, 20, 20);
		globalMx = a.mouseX;
	};


	//마우스가 어떤 영역에서는 간단한 슈팅게임이 된다!
	//마우스를 훔쳐가는 귀여운 녀석도 있으면 좋을 듯 

	a.watchWindowSize = function () {
		$(window).resize(function () {
			a.resizeCanvas(a.windowWidth, a.windowHeight, true);
			a.redraw();
		});
	}

	function aMouseOut() {
		console.log("a 마우스 아웃");
		mouseOn = false;
	}

	function aMouseOver() {
		console.log("a 마우스 오버");
		mouseOn = true;
	}

	function aMouseClicked() {
		console.log("a 마우스 클릭");
	}

	function aMouseReleased() {
		console.log("a 마우스 뗌")
	}

	function aMousePressed() {
		console.log("a 마우스 누르고 있음");
	}
}

//sb is sketch B, b is for sketch a, b, c ...
const sb = (b) => {
	let x = 100;
	let y = 500;
	let rectX = 0;
	let clr;
	let cnv;

	b.setup = () => {
		cnv = b.createCanvas(b.windowWidth, 200);
		b.pixelDensity(1);
		clr = b.color(255, 0, 0);
		cnv.mouseClicked(bMouseClicked);
		cnv.mousePressed(bMousePressed);
		cnv.mouseReleased(bMouseReleased);
		cnv.mouseOver(bMouseOver);
		cnv.mouseOut(bMouseOut);
	};

	b.draw = () => {
		b.clear();
		b.fill(255);
		b.rect(x, y, 50, 50);
		rectX = rectX += 3; // Move Rectangle

		b.fill(255);
		b.triangle(30 - 58 + globalMx, 75, globalMx, 20, 86 - 58 + globalMx, 75);

		b.fill(clr);
		b.rect(rectX, 40, 20, 20);
		console.log("루프 도는 중");
	};

	function bMouseOut() {
		console.log("b 마우스 아웃");
		b.noLoop();
	}

	function bMouseOver() {
		console.log("b 마우스 오버");
		b.loop();
	}

	function bMouseClicked() {
		console.log("b 마우스 클릭");
	}

	function bMouseReleased() {
		console.log("b 마우스 뗌");
	}

	function bMousePressed() {
		console.log("b 마우스 누르고 있음");
	}
}



// eslint-disable-next-line no-unused-vars, no-undef
let sketch_a = new p5(sa, document.getElementById("a"));
// eslint-disable-next-line no-unused-vars, no-undef
let sketch_b = new p5(sb, document.getElementById("b"));