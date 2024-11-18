# Build guide

## TL;DR
- Make sure to connect the jumpers on the back side of each PCB (same side as where you solder the diodes and hot swap sockets)
- Case is mounted with M2*3.2 threaded screw inserts and M2 screws.
- This keyboard uses 18 MX switches and 50 Gateron ks-27 switches, and the diode directions are opposite for the two types of switches.
- See [this build guide of the Corax Keyboard for scroll wheel installation and modificaton](https://github.com/dnlbauer/corax-keyboard/blob/main/docs/BuildGuide.md) 


## Parts list

Buying spare parts is recommended. Default values for `Wired` and `Wireless` are `Required`

| Name                                       | Quantity  | Wired        | Wireless | Notes                                                                                                                      |
|--------------------------------------------|-----------|--------------|----------|----------------------------------------------------------------------------------------------------------------------------|
| PCB                                        | 2         |              |          | Download the berber files from the release page; PCB thickness 1.6                                                         |
| Cases                                      | 1 of each |              |          | Download STL files from the release page; customization is possible, see [case customization](/docs/case_customization.md) |
| MX switches and hotswap sockets            | 18        |              |          |                                                                                                                            |
| Gateron ks-27 switches and hotswap sockets | 50        |              |          |                                                                                                                            |
| EVQWGD001 encoders                         | 2         |              |          |                                                                                                                            |
| SOD-123 diodes                             | 70        |              |          | I use the `1N4148W` diodes                                                                                                 |
| 1u key caps                                | 66        |              |          | I use DSA caps for ks-27 switches and XDA caps for MX switches, to create a larger height difference                       |
| 1.5u key caps                              | 2         |              |          | I use XDA caps                                                                                                             |
| M2*3*3.2 threaded screw inserts            | 14        |              |          | you could use ones with different height                                                                                   |
| M2*8 screws                                | 4         |              |          |                                                                                                                            |
| M2*10 screws                               | 10        |              |          |                                                                                                                            |
| Nice!nano v2 boards                        | 2         | Not needed | Required | I don't think you can use them for wired version, since QMK doesn't support its MCU                                        |
| Pro Micro boards                           | 2         | Required     |Not needed|                                                                                                                            |
| Reset Buttons                           |  2         |              |          |  I can't find the exact part number, the distance between pins is 6mm  |
| TRRS jacks | 2 | Required | Optional | Used for power transmission for wireless version |
| 3.5mm wires | 1 | Required | Optional | Make sure to buy the ones with 4 rings! the ones with 3 won't work and may ruin your boards! |
| 3.7V lithium batteries | 2 | Not needed | Required | I use 6*12*30mm ones |
| Slider switches | 2 | Not needed | Required | K3-1296S-E1 and MK-12C02-G015 both work |
| 12-pin 2.54mm pins and sockets | 4 |  |  | Sockets are highly recommended especially if you use Pro Micro ATMEGA32U4 boards |
| 11mm silicone footpads |  |  |  | Used for flat cases |
| M5 screws | 8 |  |  | Used for tented cases, determine lengths yourself |
| M5 nuts | 16 |  |  | For tented cases |
| 7.7mm silicone rubber round caps |  |  |  | For tented cases |



## Step By Step

TODO




