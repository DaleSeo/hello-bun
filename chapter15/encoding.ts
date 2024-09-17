const encoded = btoa("Hello, Bun!");
console.log("인코딩 결과:", encoded);

const decoded = atob(encoded);
console.log("디코딩 결과:", decoded);
