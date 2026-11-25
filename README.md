[![make.fun · u-pangg7-the-best-advice-i-ever-got-358cefb0](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0?utm_source=github&utm_medium=readme&utm_campaign=u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![rank](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0/ddsopian018-hue/u-pangg7-the-best-advice-i-ever-got-358cefb0/rank.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![reward](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0/ddsopian018-hue/u-pangg7-the-best-advice-i-ever-got-358cefb0/reward.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0?utm_source=github&utm_medium=readme&utm_campaign=u-pangg7-the-best-advice-i-ever-got-358cefb0)

# The Best Advice I Ever Got

One sentence about the best advice I ever received: my grandfather, grease still on his hands after fixing a neighbour's truck for free, telling me to charge for the work but never for the kindness — because trucks break again, and people remember kindness.

`main.ts` writes that single sentence to `$MAKEFUN_OUTPUT_DIR/entry.txt`. It is a plain Node program with no dependencies: it reads the output directory from `MAKEFUN_OUTPUT_DIR` (falling back to a relative `output` directory), creates it if needed, and writes the sentence as UTF-8.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
cat output/entry.txt
```

Entered on make.fun — https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0 — ref: https://make.fun/r/15w4cn26
