import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * HomeScreen13 renders the static Home Screen converted from generated HTML.
 * It preserves classNames and absolute positioning for pixel accuracy and adapts
 * minimal interaction logic to React (bottom nav selection and filter button press).
 */
export default function HomeScreen13() {
  // Images are served from CRA public directory. Use absolute /figmaimages or PUBLIC_URL prefix
  // e.g., `${process.env.PUBLIC_URL}/figmaimages/...` to work in dev and production subpaths.
  useEffect(() => {
    // Bottom nav selection behavior adapted from assets/home-screen-1-3.js
    const nav = document.getElementById('node-205-169');
    if (nav) {
      const items = Array.from(nav.querySelectorAll('[id^="node-205-"]')).filter(
        (n) =>
          n.id === 'node-205-168' ||
          n.id === 'node-205-161' ||
          n.id === 'node-205-156' ||
          n.id === 'node-205-158'
      );
      const onClick = (el) => () => {
        items.forEach((i) => (i.style.opacity = i === el ? '1' : '0.6'));
      };
      items.forEach((el) => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', onClick(el));
      });
      // cleanup
      return () => {
        items.forEach((el) => {
          el.style.cursor = '';
          el.replaceWith(el.cloneNode(true)); // simple remove listeners
        });
      };
    }
  }, []);

  useEffect(() => {
    const filterBtn = document.getElementById('node-206-13');
    if (!filterBtn) return;
    const onDown = () => (filterBtn.style.transform = 'scale(0.98)');
    const onUp = () => (filterBtn.style.transform = 'scale(1)');
    const onLeave = () => (filterBtn.style.transform = 'scale(1)');
    filterBtn.addEventListener('mousedown', onDown);
    filterBtn.addEventListener('mouseup', onUp);
    filterBtn.addEventListener('mouseleave', onLeave);
    return () => {
      filterBtn.removeEventListener('mousedown', onDown);
      filterBtn.removeEventListener('mouseup', onUp);
      filterBtn.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <main
      id="home-screen"
      className="figma-screen style-1"
      style={{ width: 375, height: 812, borderRadius: 40 }}
    >
      {/* Ellipse 1 (Avatar) */}
      <div
        id="node-203-66"
        className="figma-abs figma-ellipse"
        style={{ left: 294, top: 52, width: 50, height: 50 }}
      >
        <img
          className="figma-img"
          src={`${process.env.PUBLIC_URL || ''}/figmaimages/figma_image_203_66.png`}
          alt="Ellipse 1"
          width="50"
          height="50"
        />
      </div>

      {/* Title: Find a coffee shop anywhere */}
      <p
        id="node-203-37"
        className="figma-abs typo-17"
        style={{ left: 23, top: 111, width: 216, height: 58, whiteSpace: 'pre-line', margin: 0 }}
      >
        {`Find a coffee shop
anywhere`}
      </p>

      {/* Featured coffee shops */}
      <p
        id="node-203-70"
        className="figma-abs typo-13"
        style={{ left: 23, top: 275, width: 210, height: 23, margin: 0 }}
      >
        Featured coffee shops
      </p>

      {/* Search content frame */}
      <div
        id="node-206-16"
        className="figma-abs figma-flex-row"
        style={{ left: 23, top: 198, width: 320, height: 56 }}
      >
        {/* Search */}
        <div
          id="node-206-15"
          className="figma-flex-col style-12"
          style={{ position: 'relative', width: 251, height: 56 }}
        >
          <div
            id="node-206-14"
            className="figma-flex-row"
            style={{ position: 'absolute', left: 13, top: 16, width: 88, height: 24, alignItems: 'center', gap: 8 }}
          >
            <div id="node-205-204" className="style-4" style={{ width: 24, height: 24, position: 'relative' }}>
              <img
                id="node-205-205"
                src={`${process.env.PUBLIC_URL || ''}/figmaimages/figma_image_205_205.png`}
                alt="Search Icon Vector"
                width="16"
                height="16"
                style={{ position: 'absolute', left: 3, top: 3 }}
              />
            </div>
            <span id="node-203-71" className="typo-18">Search</span>
          </div>
        </div>

        {/* Filter */}
        <button
          id="node-206-13"
          className="style-27"
          style={{ position: 'relative', width: 58, height: 56, marginLeft: 11, border: 'none', cursor: 'pointer' }}
          aria-label="Open filters"
          type="button"
        >
          <div id="node-205-122" style={{ position: 'absolute', left: 19, top: 16, width: 20, height: 18 }}>
            <div style={{ position: 'absolute', left: 10, top: 5, width: 10, height: 0, borderTop: '2px solid #ffffff' }} />
            <div style={{ position: 'absolute', left: 0, top: 15, width: 10, height: 0, borderTop: '2px solid #ffffff' }} />
            <div className="figma-ellipse style-14" style={{ position: 'absolute', left: 0, top: 0, width: 8, height: 8, background: 'transparent' }}>
              <img
                src={`${process.env.PUBLIC_URL || ''}/figmaimages/figma_image_205_120.png`}
                alt="Ellipse 4"
                width="8"
                height="8"
                style={{ width: 8, height: 8 }}
              />
            </div>
            <div className="figma-ellipse style-14" style={{ position: 'absolute', left: 12, top: 10, width: 8, height: 8, background: 'transparent' }} />
          </div>
        </button>
      </div>

      {/* Card 1 */}
      <section
        id="node-205-112"
        className="figma-abs figma-flex-col"
        style={{ left: 23, top: 312, width: 160, height: 277 }}
      >
        <div id="node-205-110" style={{ position: 'relative', width: 160, height: 179 }}>
          <div
            id="node-203-72"
            className="figma-rect style-16"
            style={{ position: 'absolute', left: 0, top: 11, width: 153, height: 168, overflow: 'hidden' }}
          >
            <img
              className="figma-img"
              src={`${process.env.PUBLIC_URL || ''}/figmaimages/figma_image_203_72.png`}
              alt="Rectangle 1747"
              width="153"
              height="168"
            />
          </div>
          <div id="node-205-108" style={{ position: 'absolute', left: 124, top: 0, width: 36, height: 36 }}>
            <div id="node-205-84" className="figma-ellipse style-17" style={{ position: 'absolute', left: 0, top: 0, width: 36, height: 36 }} />
            <img
              id="node-205-91"
              src={`${process.env.PUBLIC_URL || ''}/figmaimages/figma_image_205_91.png`}
              alt="Vector"
              width="16"
              height="13.955297470092773"
              style={{ position: 'absolute', left: 10, top: 12 }}
            />
          </div>
        </div>
        <div id="node-205-101" className="figma-flex-col" style={{ position: 'relative', width: 153, height: 84, marginTop: 0 }}>
          <p id="node-204-76" className="typo-15" style={{ margin: 0, position: 'absolute', left: 0, top: 0, width: 153, height: 38 }}>
            Home Coffee Roasters
          </p>
          <div
            id="node-205-100"
            className="figma-flex-row"
            style={{ position: 'absolute', left: 0, top: 45, width: 128, height: 16, alignItems: 'center', gap: 7 }}
          >
            <img
              id="node-205-98"
              src={`${process.env.PUBLIC_URL || ''}/figmaimages/figma_image_205_98.png`}
              alt="Star Vector"
              width="13"
              height="12.363000869750977"
            />
            <span id="node-205-94" className="typo-14">4.5 1,200 reviews</span>
          </div>
          <p id="node-205-96" className="typo-14" style={{ position: 'absolute', left: 0, top: 68, margin: 0 }}>
            3.8 miles
          </p>
        </div>
      </section>

      {/* Card 2 */}
      <section
        id="node-205-113"
        className="figma-abs figma-flex-col"
        style={{ left: 191, top: 330, width: 160, height: 280 }}
      >
        <div id="node-205-111" style={{ position: 'relative', width: 160, height: 201 }}>
          <div
            id="node-203-73"
            className="figma-rect style-16"
            style={{ position: 'absolute', left: 0, top: 11, width: 153, height: 190, overflow: 'hidden' }}
          >
            <img
              className="figma-img"
              src={`${process.env.PUBLIC_URL || ''}/figmaimages/figma_image_203_73.png`}
              alt="Rectangle 1748"
              width="153"
              height="190"
            />
          </div>
          <div id="node-205-109" style={{ position: 'absolute', left: 124, top: 0, width: 36, height: 36 }}>
            <div id="node-205-92" className="figma-ellipse style-17" style={{ position: 'absolute', left: 0, top: 0, width: 36, height: 36 }} />
          </div>
        </div>
        <div id="node-205-102" className="figma-flex-col" style={{ position: 'relative', width: 153, height: 65 }}>
          <p id="node-205-103" className="typo-15" style={{ position: 'absolute', left: 0, top: 0, margin: 0 }}>
            Haus Coffee
          </p>
          <div
            id="node-205-104"
            className="figma-flex-row"
            style={{ position: 'absolute', left: 0, top: 26, width: 118, height: 16, alignItems: 'center', gap: 7 }}
          >
            <span id="node-205-106" className="typo-14">4.4 429 reviews</span>
          </div>
          <p id="node-205-107" className="typo-14" style={{ position: 'absolute', left: 0, top: 49, margin: 0 }}>
            2.5 miles
          </p>
        </div>
      </section>

      {/* Card 3 */}
      <section
        id="node-205-172"
        className="figma-abs figma-flex-col"
        style={{ left: 23, top: 595, width: 160, height: 277 }}
      >
        <div id="node-205-173" style={{ position: 'relative', width: 160, height: 179 }}>
          <div id="node-205-174" className="figma-rect style-16" style={{ position: 'absolute', left: 0, top: 11, width: 153, height: 168 }} />
          <div id="node-205-175" style={{ position: 'absolute', left: 124, top: 0, width: 36, height: 36 }}>
            <div id="node-205-176" className="figma-ellipse style-17" style={{ position: 'absolute', left: 0, top: 0, width: 36, height: 36 }} />
          </div>
        </div>
        <div id="node-205-178" className="figma-flex-col" style={{ position: 'relative', width: 153, height: 84 }}>
          <p id="node-205-179" className="typo-15" style={{ position: 'absolute', left: 0, top: 0, margin: 0 }}>
            Home Coffee Roasters
          </p>
          <div
            id="node-205-180"
            className="figma-flex-row"
            style={{ position: 'absolute', left: 0, top: 45, width: 128, height: 16, alignItems: 'center', gap: 7 }}
          >
            <span id="node-205-182" className="typo-14">4.5 1,200 reviews</span>
          </div>
          <p id="node-205-183" className="typo-14" style={{ position: 'absolute', left: 0, top: 68, margin: 0 }}>
            3.8 miles
          </p>
        </div>
      </section>

      {/* Card 4 */}
      <section
        id="node-205-184"
        className="figma-abs figma-flex-col"
        style={{ left: 191, top: 616, width: 160, height: 280 }}
      >
        <div id="node-205-185" style={{ position: 'relative', width: 160, height: 201 }}>
          <div id="node-205-186" className="figma-rect style-16" style={{ position: 'absolute', left: 0, top: 11, width: 153, height: 190 }} />
          <div id="node-205-187" style={{ position: 'absolute', left: 124, top: 0, width: 36, height: 36 }}>
            <div id="node-205-188" className="figma-ellipse style-17" style={{ position: 'absolute', left: 0, top: 0, width: 36, height: 36 }} />
          </div>
        </div>
        <div id="node-205-190" className="figma-flex-col" style={{ position: 'relative', width: 153, height: 65 }}>
          <p id="node-205-191" className="typo-15" style={{ position: 'absolute', left: 0, top: 0, margin: 0 }}>
            Haus Coffee
          </p>
          <div
            id="node-205-192"
            className="figma-flex-row"
            style={{ position: 'absolute', left: 0, top: 26, width: 118, height: 16, alignItems: 'center', gap: 7 }}
          >
            <span id="node-205-194" className="typo-14">4.4 429 reviews</span>
          </div>
          <p id="node-205-195" className="typo-14" style={{ position: 'absolute', left: 0, top: 49, margin: 0 }}>
            2.5 miles
          </p>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav
        id="node-205-169"
        className="figma-abs figma-flex-row style-4"
        style={{ left: 0, top: 698, width: 375, height: 114, alignItems: 'center', justifyContent: 'space-around' }}
        aria-label="Bottom navigation"
      >
        <div id="node-205-168" className="nav-item-selected" style={{ position: 'relative', width: 70, height: 58.3333320618 }}>
          <div id="node-205-165" className="figma-rect style-26" style={{ position: 'absolute', left: 0, top: 0, width: 70, height: 58.3333320618 }} />
          <div id="node-205-153" className="style-4" style={{ position: 'absolute', left: 22.5, top: 17.166666, width: 24, height: 24 }}>
            <div id="node-205-166" style={{ position: 'absolute', left: 3.6, top: 2.4, width: 18, height: 20.000013 }}>
              <img
                id="node-205-154"
                src={`${process.env.PUBLIC_URL || ''}/figmaimages/figma_image_205_154.png`}
                alt="home Vector"
                width="18"
                height="20.000001907348633"
                style={{ position: 'absolute', left: 0, top: 0 }}
              />
            </div>
          </div>
        </div>

        <div id="node-205-161" className="style-4" style={{ position: 'relative', width: 24, height: 24 }}>
          <img
            id="node-205-162"
            src={`${process.env.PUBLIC_URL || ''}/figmaimages/figma_image_205_162.png`}
            alt="heart Vector"
            width="20.90311622619629"
            height="18.23182487487793"
            style={{ position: 'absolute', left: 2.0487, top: 2.9982 }}
          />
        </div>

        <div id="node-205-156" className="style-4" style={{ position: 'relative', width: 24, height: 24 }}>
          <img
            id="node-205-157"
            src={`${process.env.PUBLIC_URL || ''}/figmaimages/figma_image_205_157.png`}
            alt="bookmark Vector"
            width="14"
            height="18"
            style={{ position: 'absolute', left: 5.5, top: 3 }}
          />
        </div>

        <div id="node-205-158" className="style-4" style={{ position: 'relative', width: 24, height: 24 }}>
          <img
            id="node-205-160"
            src={`${process.env.PUBLIC_URL || ''}/figmaimages/figma_image_205_160.png`}
            alt="user Vector"
            width="8"
            height="8"
            style={{ position: 'absolute', left: 8, top: 3 }}
          />
        </div>
      </nav>
    </main>
  );
}
