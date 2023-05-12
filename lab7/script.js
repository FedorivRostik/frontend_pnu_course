const pi = Math.PI;
const pi_rad = pi / 180;

function triangle(value1, type1, value2, type2) {
    if (!value1 || !value2 || !type1 || !type2) {
        console.log("Failed");
        console.log("Input all parameters")
        return;
    }
    else if (value1 <= 0 || value2 <= 0) {
        console.log("Failed");
        console.log("Zero or negative input");
        return;
    }

    if (type1 === "leg" && type2 === "leg") {
        let C = Math.sqrt(Math.pow(value1, 2) + Math.pow(value2, 2));

        if ((value1 + value2 > C) && (value1 + C > value2) && (value2 + C > value1)) {
            console.log("A = " + value1 + '\n' + "B = " + value2 + '\n' + "C = " + C);
            let alpha = Math.atan(value1 / value2) / pi_rad;

            let beta = Math.atan(value2 / value1) / pi_rad;
            console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "gamma = 90");
            console.log("success");
            return;
        }

        console.log("Failed");
        console.log("Something is wrong with parameters");
        return;

    }
    else if ((type1 === "leg" && type2 === "hypotenuse") || (type2 === "leg" && type1 === "hypotenuse")) {
        let B, C;
        if (type1 === "leg") {
            B = value1;
            C = value2;
        }
        else if (type2 === "leg") {
            C = value1;
            B = value2;
        }
        else {
            console.log("Failed");
            return;
        }

        if (B > C) {
            console.log("hypotenuse must be longer than leg")
            console.log("Failed");
            return;
        }

        let A = Math.sqrt(Math.pow(C, 2) - Math.pow(B, 2));

        if ((B + C > A) && (B + A > C) && (C + A > B)) {
            console.log("A = " + A + '\n' + "B = " + B + '\n' + "C = " + C);

            let alpha = Math.atan(A / B) / pi_rad;

            let beta = Math.atan(B / A) / pi_rad;
            console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "gamma = 90");
            console.log("success");
            return;
        }

        console.log("Failed");
        console.log("Something is wrong with parameters");
        return;

    }

    else if ((type1 === "leg" && type2 === "adjacent angle") || (type2 === "leg" && type1 === "adjacent angle")) {
        let B, alpha;
        if (type1 === "leg") {
            B = value1;
            alpha = value2;
        }
        else if (type2 === "leg") {
            B = value2;
            alpha = value1;
        }
        else {
            console.log("Failed");
            return;
        }

        if (alpha >= 90) {
            console.log("adjacent angle must be less than 90");
            console.log("Failed");
            return;
        }

        let C = B / Math.cos(alpha * pi_rad);
        let A = B * Math.tan(alpha * pi_rad);

        if ((B + C > A) && (B + A > C) && (C + A > B)) {
            console.log("A = " + A + '\n' + "B = " + B + '\n' + "C = " + C);
            let beta = 90 - alpha;
            console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "gamma = 90");
            console.log("success");
            return;
        }

        console.log("Failed");
        console.log("Something is wrong with parameters");
        return;

    }
    else if ((type1 === "leg" && type2 === "opposite angle") || (type2 === "leg" && type1 === "opposite angle")) {
        let B, beta;
        if (type1 === "leg") {
            B = value1;
            beta = value2;
        }
        else if (type2 === "leg") {
            B = value2;
            beta = value1;
        }
        else {
            console.log("Failed");
            return;
        }

        if (beta >= 90) {
            console.log("opposite angle must be less than 90");
            console.log("Failed");
            return;
        }

        let C = B / Math.sin(beta * (pi_rad));
        let A = Math.sqrt(C * C - B * B);

        if ((B + C > A) && (B + A > C) && (C + A > B)) {
            console.log("A = " + A + '\n' + "B = " + B + '\n' + "C = " + C);
            let alpha = 90 - beta;
            console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "gamma = 90");
            console.log("success");
            return;
        }

        console.log("Failed");
        console.log("Something is wrong with parameters");
        return;


    }
    else if ((type1 === "angle" && type2 === "hypotenuse") || (type2 === "angle" && type1 === "hypotenuse")) {
        let C, beta;
        if (type1 === "angle") {
            beta = value1;
            C = value2;
        }
        else if (type2 === "angle") {
            beta = value2;
            C = value1;
        }
        else {
            console.log("Failed");
            return;
        }

        if (beta >= 90) {
            console.log("angle must be less than 90");
            console.log("Failed");
            return;
        }

        let A = C * Math.sin(beta * (pi_rad));
        let B = C * Math.cos(beta * (pi_rad));

        if ((B + C > A) && (B + A > C) && (C + A > B)) {
            console.log("A = " + A + '\n' + "B = " + B + '\n' + "C = " + C);
            let alpha = 90 - beta;
            console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "gamma = 90");
            console.log("success");
            return;
        }
        console.log("Failed");
        console.log("Something is wrong with parameters");
        return;


    }
    console.log("Check instruction");
    return;
}

function printTable() {
    console.log("                              Instruction");
    console.log("╭────────────────┬──────────────────────────────────────────────────────╮");
    console.log("│ Symbol         │ Represents                                           │");
    console.log("├────────────────┼──────────────────────────────────────────────────────┤");
    console.log("│ leg            │ The leg of a triangle                                │");
    console.log("├────────────────┼──────────────────────────────────────────────────────┤");
    console.log("│ hypotenuse     │ The hypotenuse of a triangle                         │");
    console.log("├────────────────┼──────────────────────────────────────────────────────┤");
    console.log("│ adjacent angle │ The angle between the hypotenuse and an adjacent leg │");
    console.log("├────────────────┼──────────────────────────────────────────────────────┤");
    console.log("│ opposite angle │ The angle between the hypotenuse and the opposite leg│");
    console.log("├────────────────┼──────────────────────────────────────────────────────┤");
    console.log("│ angle          │ The acute angle of the triangle                      │");
    console.log("╰────────────────┴──────────────────────────────────────────────────────╯\n");
}

function printInstructions() {
    console.log("Therefore, the function should take arguments in the following order:");
    console.log("1. The value of the first argument,");
    console.log("2. The type of the first argument (see table above),");
    console.log("3. The value of the second argument,");
    console.log("4. The type of the second argument (see table above).");
    console.log("For example:");
    console.log('triangle(10,"leg",16,"hypotenuse");');
}

(() => {
    printTable();
    printInstructions();
})();
