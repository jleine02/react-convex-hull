import React, { useMemo, useState, useEffect } from 'react';
import { scaleOrdinal } from '@visx/scale';
import { LinearGradient } from '@visx/gradient';
import { Drag, raise } from '@visx/drag';
import generateCircles, { Circle } from './generateCircles';