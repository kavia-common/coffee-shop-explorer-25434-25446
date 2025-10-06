import React from 'react';
import '../assets/common.css';
import '../assets/cafe-screen-1-6.css';

/**
 * PUBLIC_INTERFACE
 * CafeScreen16 renders the Cafe detail screen converted from assets/cafe-screen-1-6.html.
 * Images are served from the CRA public folder using PUBLIC_URL for compatibility.
 */
export default function CafeScreen16() {
  const PUB = process.env.PUBLIC_URL || '';

  return (
    <main
      id="cafe-screen-1-6"
      className="figma-screen style-1"
      style={{ width: 375, height: 812, borderRadius: 40 }}
      aria-label="Cafe screen"
    >
      {/* Background top image Rectangle 1748 */}
      <div
        id="node-205-198"
        className="figma-abs figma-rect"
        style={{ left: 0, top: 0, width: 375, height: 334, overflow: 'hidden' }}
      >
        <img
          className="figma-img"
          src={`${PUB}/figmaimages/figma_image_205_198.png`}
          alt="Cafe header"
          width="375"
          height="334"
        />
      </div>

      {/* Bottom white panel Rectangle 1749 */}
      <div
        id="node-205-199"
        className="figma-abs figma-rect style-3"
        style={{ left: 0, top: 306, width: 375, height: 506 }}
      />

      {/* Group 8 - rating dots */}
      <div
        id="node-205-203"
        className="figma-abs"
        style={{ left: 160, top: 248.2941131592, width: 56, height: 12 }}
      >
        <div
          id="node-205-200"
          className="figma-abs figma-ellipse style-4"
          style={{ left: 0, top: 0, width: 12, height: 12 }}
        >
          <img
            className="figma-img"
            src={`${PUB}/figmaimages/figma_image_205_200.png`}
            alt="Active indicator"
            width="12"
            height="12"
          />
        </div>
        <div
          id="node-205-201"
          className="figma-abs figma-ellipse style-5"
          style={{ left: 22, top: 0, width: 12, height: 12 }}
        />
        <div
          id="node-205-202"
          className="figma-abs figma-ellipse style-5"
          style={{ left: 44, top: 0, width: 12, height: 12 }}
        />
      </div>

      {/* Category tiles Group 9 */}
      <div
        id="node-207-57"
        className="figma-abs"
        style={{ left: 47, top: 432, width: 287, height: 100 }}
      >
        {/* Frame 14 - Coffee */}
        <div
          id="node-207-34"
          className="figma-abs figma-flex-col style-6"
          style={{ left: 0, top: 0, width: 92, height: 100 }}
        >
          <div
            id="node-207-35"
            className="figma-abs style-4"
            style={{ left: 34, top: 22.5, width: 24, height: 24, position: 'absolute' }}
          >
            <img
              id="node-207-36"
              src={`${PUB}/figmaimages/figma_image_207_36.png`}
              alt="Coffee mug icon"
              width="22.000001907348633"
              height="24"
              style={{ position: 'absolute', left: 1, top: 0 }}
            />
          </div>
          <p
            id="node-207-37"
            className="typo-11"
            style={{ position: 'absolute', left: 18, top: 56.5, margin: 0 }}
          >
            Coffee
          </p>
        </div>

        {/* Frame 13 - Drinks */}
        <div
          id="node-207-28"
          className="figma-abs figma-flex-col"
          style={{ left: 130, top: 21, width: 54, height: 55 }}
        >
          <div
            id="node-207-19"
            className="figma-abs style-4"
            style={{ left: 15, top: 0, width: 24, height: 24 }}
          >
            <img
              id="node-207-20"
              src={`${PUB}/figmaimages/figma_image_207_20.png`}
              alt="Drink icon"
              width="19.996313095092773"
              height="24"
              style={{ position: 'absolute', left: 2.008, top: 0 }}
            />
          </div>
          <p id="node-207-31" className="typo-12" style={{ position: 'absolute', left: 0, top: 34, margin: 0 }}>
            Drinks
          </p>
        </div>

        {/* Frame 12 - Food */}
        <div
          id="node-207-24"
          className="figma-abs figma-flex-col"
          style={{ left: 244, top: 21, width: 43, height: 55 }}
        >
          <div
            id="node-207-17"
            className="figma-abs style-4"
            style={{ left: 9.5, top: 0, width: 24, height: 24 }}
          >
            <img
              id="node-207-18"
              src={`${PUB}/figmaimages/figma_image_207_18.png`}
              alt="Food croissant icon"
              width="24.013540267944336"
              height="24.001949310302734"
              style={{ position: 'absolute', left: 0, top: 0 }}
            />
          </div>
          <p id="node-207-27" className="typo-12" style={{ position: 'absolute', left: 0, top: 34, margin: 0 }}>
            Food
          </p>
        </div>
      </div>

      {/* Back chevron */}
      <div
        id="node-207-48"
        className="figma-abs figma-flex-row style-9"
        style={{ left: 26, top: 44, width: 36, height: 36 }}
        role="button"
        aria-label="Go back"
        tabIndex={0}
      >
        {/* Vector icon has only stroke style, drawn via CSS */}
        <div
          id="node-207-49"
          className="figma-abs chevron-left-stroke"
          style={{ left: 15, top: 12, width: 6, height: 12 }}
        />
      </div>

      {/* Title and rating/address Frame 15 */}
      <div
        id="node-207-63"
        className="figma-abs"
        style={{ left: 47, top: 331, width: 118, height: 77 }}
      >
        <p id="node-207-40" className="typo-13" style={{ position: 'absolute', left: 0, top: 0, margin: 0 }}>
          Haus Coffee
        </p>
        <div
          id="node-207-59"
          className="figma-abs figma-flex-row"
          style={{ left: 0, top: 34, width: 118, height: 16, alignItems: 'center' }}
        >
          <img
            id="node-207-60"
            src={`${PUB}/figmaimages/figma_image_207_60.png`}
            alt="Star"
            width="13"
            height="12.363000869750977"
            style={{ display: 'block' }}
          />
          <span id="node-207-61" className="typo-14" style={{ marginLeft: 4 }}>
            4.4 429 reviews
          </span>
        </div>
        <p id="node-207-62" className="typo-14" style={{ position: 'absolute', left: 0, top: 61, margin: 0 }}>
          San Francisco, CA
        </p>
      </div>

      {/* Recommendations Frame 18 */}
      <div
        id="node-208-24"
        className="figma-abs"
        style={{ left: 28, top: 549, width: 330, height: 314 }}
      >
        {/* Group 11 (Card 1) */}
        <div id="node-207-91" className="figma-abs" style={{ left: 0, top: 0, width: 330, height: 154 }}>
          <div
            id="node-207-64"
            className="figma-abs figma-rect style-12"
            style={{ left: 0, top: 13, width: 320, height: 141 }}
          />
          <div id="node-207-79" className="figma-abs" style={{ left: 294, top: 0, width: 36, height: 36 }}>
            <div
              id="node-207-80"
              className="figma-abs figma-ellipse style-13"
              style={{ left: 0, top: 0, width: 36, height: 36 }}
            >
              <img
                className="figma-img"
                src={`${PUB}/figmaimages/figma_image_207_80.png`}
                alt="Action circle"
                width="36"
                height="36"
              />
            </div>
            <div id="node-207-87" className="figma-abs style-4" style={{ left: 6, top: 6, width: 24, height: 24 }}>
              {/* Plus made with strokes */}
              <div id="node-207-88" className="figma-abs plus-vert" style={{ left: 12, top: 7, width: 0, height: 14 }} />
              <div id="node-207-89" className="figma-abs plus-horz" style={{ left: 5, top: 14, width: 14, height: 0 }} />
            </div>
          </div>
          <div id="node-207-90" className="figma-abs" style={{ left: 22, top: 31, width: 268, height: 105 }}>
            <div
              id="node-207-65"
              className="figma-abs figma-rect style-15"
              style={{ left: 0, top: 0, width: 89, height: 105, overflow: 'hidden' }}
            >
              <img
                className="figma-img"
                src={`${PUB}/figmaimages/figma_image_207_65.png`}
                alt="Cafè mocha preview"
                width="89"
                height="105"
              />
            </div>
            <div id="node-207-83" className="figma-abs" style={{ left: 115, top: 0, width: 153, height: 105 }}>
              <div id="node-207-82" className="figma-abs" style={{ left: 0, top: 0, width: 153, height: 75 }}>
                <p id="node-207-66" className="typo-15" style={{ position: 'absolute', left: 0, top: 0, margin: 0 }}>
                  Cafè mocha
                </p>
                <p
                  id="node-207-67"
                  className="typo-16"
                  style={{ position: 'absolute', left: 0, top: 27, width: 153, height: 48, margin: 0 }}
                >
                  A chocolate-flavored warm beverage that is a variant of a cafè latte
                </p>
              </div>
              <p id="node-207-78" className="typo-14" style={{ position: 'absolute', left: 0, top: 89, margin: 0 }}>
                $3.00
              </p>
            </div>
          </div>
        </div>

        {/* Group 12 (Card 2) */}
        <div id="node-208-10" className="figma-abs" style={{ left: 0, top: 160, width: 330, height: 154 }}>
          <div
            id="node-208-11"
            className="figma-abs figma-rect style-12"
            style={{ left: 0, top: 13, width: 320, height: 141 }}
          />
          <div id="node-208-12" className="figma-abs" style={{ left: 294, top: 0, width: 36, height: 36 }}>
            <div
              id="node-208-13"
              className="figma-abs figma-ellipse style-13"
              style={{ left: 0, top: 0, width: 36, height: 36 }}
            />
            <div id="node-208-14" className="figma-abs style-4" style={{ left: 6, top: 6, width: 24, height: 24 }}>
              <div id="node-208-15" className="figma-abs plus-vert" style={{ left: 12, top: 7, width: 0, height: 14 }} />
              <div id="node-208-16" className="figma-abs plus-horz" style={{ left: 5, top: 14, width: 14, height: 0 }} />
            </div>
          </div>
          <div id="node-208-17" className="figma-abs" style={{ left: 22, top: 31, width: 268, height: 105 }}>
            <div
              id="node-208-18"
              className="figma-abs figma-rect style-15"
              style={{ left: 0, top: 0, width: 89, height: 105 }}
            />
            <div id="node-208-19" className="figma-abs" style={{ left: 115, top: 0, width: 153, height: 105 }}>
              <div id="node-208-20" className="figma-abs" style={{ left: 0, top: 0, width: 153, height: 75 }}>
                <p id="node-208-21" className="typo-15" style={{ position: 'absolute', left: 0, top: 0, margin: 0 }}>
                  Caramel machiatto
                </p>
                <p
                  id="node-208-22"
                  className="typo-16"
                  style={{ position: 'absolute', left: 0, top: 27, width: 153, height: 48, margin: 0 }}
                >
                  Steamed milk marked with an espresso and caramel topping
                </p>
              </div>
              <p id="node-208-23" className="typo-14" style={{ position: 'absolute', left: 0, top: 89, margin: 0 }}>
                $3.50
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Faded bottom bar Rectangle 1752 placeholder */}
      <div
        id="node-208-30"
        className="figma-abs figma-rect"
        style={{ left: 0, top: 291, width: 375, height: 114 }}
      />
    </main>
  );
}
