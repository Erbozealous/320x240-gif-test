/**
 * Makecode project to test out the functionality of custom gis and images
 * 
 * All the assets here are custom images imported via text arrays
 * 
 * For more information, check here:
 * https://forum.makecode.com/t/image-to-makecode-arcade-image-converter-again/12367
 * 
 * 
 * 
 */

// Setting custom resolution
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320 
    export const ARCADE_SCREEN_HEIGHT = 240
}

// This project is mainly using 4 sprites; one for the animations, 
//one for the background caption, one text sprite for captions, and one for the vintage filter


// Initial caption background creation
let captionBackground = sprites.create(getProjectImage("caption1"), SpriteKind.Player)
captionBackground.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
captionBackground.setFlag(SpriteFlag.Invisible, true)

// Initial animation background
let background = sprites.create(getProjectImage("projector"), SpriteKind.Player)
// @ts-ignore
let beginText = fancyText.create("Press a \n to begin", 0, 12)
beginText.setPosition(200, 120)


pauseUntil(() => controller.A.isPressed()) // Wait till the a key is pressed

sprites.destroy(beginText)
scene.setBackgroundColor(13)


background.setFlag(SpriteFlag.Invisible, true)


// Screen effects
scene.cameraShake(2, 5000000000) // Screen effect to reproduce animation shaking
let vignette = sprites.create(getProjectImage("caption1"), SpriteKind.Player)
animation.runImageAnimation(vignette, getProjectAnim("vignette"), 75, true)
vignette.z = 100

pause(2000)

background.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
background.setFlag(SpriteFlag.Invisible, false)
animation.runImageAnimation(background, getProjectAnim("countdown"), 150, false)

pause(10350)

//@ts-ignore
let captionText = fancyText.create("", 0, 12, fancyText.gothic_large) // Initial creation

captionHide()
animation.runImageAnimation(background, getProjectAnim("hello"), 100, true)
pause(3200)
caption("Hello everyone my name \n is markiplier")
pause(3500)

captionHide()
animation.runImageAnimation(background, getProjectAnim("intro"), 180, true)
pause(5940)
caption("And today we are playing \n five shifts at bridgeport")
pause(3000)

captionHide()
animation.runImageAnimation(background, getProjectAnim("death"), 140, false)
pause(6000)
caption("Death")
pause(3000)

captionHide()
animation.runImageAnimation(background, getProjectAnim("bite"), 150, true)
pause(6000)
caption("Twas that \n the slash of eighty seven")
pause(5000)

captionHide()
animation.runImageAnimation(background, getProjectAnim("punch"), 50, false)
pause(3300)
caption("Fin")

/**
 * Caption generation
 * @param word caption word
 */
function caption(word: string) {
    captionBackground.setFlag(SpriteFlag.Invisible, false)
    captionText.setFlag(SpriteFlag.Invisible, false)
    background.setFlag(SpriteFlag.Invisible, true)

    let number = randint(1, 3)
    switch (number) {
        case 1:
            captionBackground.setImage(getProjectImage("caption1"))
            break;
        case 2:
            captionBackground.setImage(getProjectImage("caption2"))
            break;
        case 3:
            captionBackground.setImage(getProjectImage("caption3"))
            break;
    }
    sprites.destroy(captionText)
    //@ts-ignore
    captionText = fancyText.create(word)
    //@ts-ignore
    fancyText.setFont(captionText, fancyText.gothic_large)
    //@ts-ignore
    fancyText.setColor(captionText, 12)
    captionText.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
} 
/**
 * Hiding the caption
 */
function captionHide() {
    captionBackground.setFlag(SpriteFlag.Invisible, true)
    captionText.setFlag(SpriteFlag.Invisible, true)
    background.setFlag(SpriteFlag.Invisible, false)
}

/**
 * Returns the selected animation
 * @param anim Selected animaiton
 * @returns animation as array of char arrays
 */
function getProjectAnim(anim: string) {
    if (anim == "vignette") {
        return assets.animation`vignette`
    } else if (anim == "countdown") {
        return assets.animation`countdown`
    } else if (anim == "hello") {
        return assets.animation`hello`
    } else if (anim == "intro") {
        return assets.animation`intro`
    } else if (anim == "death") {
        return assets.animation`death`
    } else if (anim == "bite") {
        return assets.animation`bite`
    } else if (anim == "punch") {
        return assets.animation`punch`
    } else {
        return null;
    }
}


/**
 * Returns the selected image
 * @param image image to select
 * @returns image as char array
 */
function getProjectImage(image2: string) {
    switch (image2) {
        case "caption1":
            return assets.image`caption1`;
            break;
        case "caption2":
            return assets.image`caption2`;
            break;
        case "caption3":
            return assets.image`caption3`;
            break;
        case "projector":
            return assets.image`projector`;
            break;
        default:
            return null;
            break;
    }
}


