function preload() {

}
function setup() {
    canvas = createCanvas(640, 480)
    video = createCapture(VIDEO)
    video.hide()
    color = ""
}
function draw() {
    image(video, 75, 100, 500, 400)
    tint(color)
    fill(255, 0, 0)
    stroke(255, 0, 0)
    circle(50, 50, 80)
    fill(30, 144, 255)
    circle(590, 50, 80)
    fill(50, 205, 50)
    rect(90, 40, 460,20)
}
function takeSnapshot() {
    save("Tire sua Selfie.png")
}
function Filter() {
    color = document.getElementById("Cores").value
}