if (typeof yarn.playerEntity().lastX == "function")
    yarnutils.playerVelocity = () => {
        let Vec3d = Packages.yarnwrap.util.math.Vec3d;

        let player = yarn.playerEntity();
        let tX = player.x - player.lastX();
        let tY = player.y - player.lastY();
        let tZ = player.z - player.lastZ();

        tX *= 20;
        tY *= 20;
        tZ *= 20;

        return new Vec3d(tX, tY, tZ);
    };
else
    yarnutils.playerVelocity = () => {
        let Vec3d = Packages.yarnwrap.util.math.Vec3d;

        let player = yarn.playerEntity();
        let tX = player.x - player.prevX();
        let tY = player.y - player.prevY();
        let tZ = player.z - player.prevZ();

        tX *= 20;
        tY *= 20;
        tZ *= 20;

        return new Vec3d(tX, tY, tZ);
    };
