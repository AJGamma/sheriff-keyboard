# :gun:Sheriff: A :fire:BLAZINGLY FAST:fire:, Feature-rich Ergonomic Split Keyboard Generated with Ergogen

- Double rotary encoder on the thumb cluster mapped to arrow keys by default, :fire:BLAZINGLY FAST:fire: for text editing
- Higher keys on the num row, easier to reach
- Similar layout to the more traditional keyboard on notebooks, less mental overload for switching between devices
- Reversible PCB
- Fully generated, including the case, allowing easy modifications
- Configurable case generation
- (Working) Both wired and wireless support


## :art: Gallery

TODO

## :sparkles: Features

TODO: finish

### Rotary Encoders

TODO: add demo gif

The core feature of the Sheriff is the easily accessible rotary encoders positioned on the thumb clusters.

#### Arrow keys

In the default layer, the encoder rotation steps are mapped to arrow keys, thus enabling easy, fast and precise cursor movements.

Moreover, If you press `8` while you scroll, each single encoder step will correspond to 8 arrow key taps, allowing for even faster movements.

#### Tab, delete and backspace

Since these keys often require continuous multiple presses as well, the encoder rotation steps are mapped to these keys as well.

Specifically:
- If you press `Tab` while scrolling, clockwise(rightwards) rotation will correspond to `Tab`, and counter-clockwise(leftwards) rotation will correspond to `Shift(Tab)`.
- If you press `Backspace` (left thumb cluster outer position) while scrolling, the clockwise(rightwards) rotation will correspond to `Delete`, and the counter-clockwise(leftwards) rotation will correspond to `Backspace`.

#### Arbitrary key repeats

You could also make the encoder repeat any other key you want. This behavior is enabled on the `Symbol` layer, activated by pressing `Esc` on the right thumb cluster outer position.

> [!NOTE]
> The ideal form of this function would be that one direction corresponds to a key press while the other direction corresponds to backspace, allowing for easy undoing. However, I haven't figured out how to implement this yet. PRs are welcome.

#### (TODO) Smooth mouse emulation

In theory the encoders can also be used for mouse emulation. Imagine a teeny tiny, easily accessible touchpad on your keyboard! However I haven't implemented this yet.


### Configurable case generation
The case is generated with [ergogen](https://github.com/ergogen/ergogen), and the config file was written with configurability in mind. There are multiple versions of the case, including `flat`, `tented`, `sinfle-sided tented` and `lifted tented`. The parameters are highly adjustable. See the `units` part of the [config file](./ergogen/config.yaml) for more details.

### Easier transitions

One of the motivations for this keyboard is to make the transition from a traditional keyboard to an ergonomic one easier. that's why the default layout is mostly the same as a traditional keyboard, with the only difference being the extra keys in thumb clusters. This way, when you switch back to a traditional keyboard and you reach for the thumb cluster mods, they are simply not there, eliminating any chance of pressing the wrong key.

### Higher up num row
TODO: finish

### Both wired(Working) and wireless support
The PCB has both trrs jacks and battery pins, allowing for both wired and wireless connections. For now, only the ZMK firmware is available, and the trrs jacks are used for power delivery: one you hook up any side to a power source, the other side could be charged as well.


## Layout

## :bulb: Inspirations

- [This amazing video by Christian Selig](https://www.youtube.com/watch?v=7UXsD7nSfDY) inspired me to build my own keyboard.
- I learned a lot from the [Corax](https://github.com/dnlbauer/corax-keyboard) keyboard, and borrowed some code as well.


## Future work
- [ ] Add QMK support
