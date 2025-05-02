# Yarnutils

Fabric API utilities.

### Installation

#### Using [pully](https://github.com/FabricCore/pully)

```
/pully install yarnutils
```

#### Require as Dependency

```json
{
  "dependencies": {
    "yarnutils": "0.1.0"
  }
}
```

#### Manual Install

1. [Download **utils**](https://github.com/FabricCore/yarnutils/archive/refs/heads/master.zip).
2. Unzip file content to _.minecraft/config/jscore/modules/yarnutils/_

The folder should look like this

```
.minecraft/config/jscore/
└── modules/
    └── yarnutils/
        └── package.json
```

## Library Functions

#### yarnutils.playerVelocity() → [Vec3d](https://fabriccore.github.io/yarnwrap/build/latest.html?q=util.math.Vec3d)

Returns player velocity in blocks per second.
