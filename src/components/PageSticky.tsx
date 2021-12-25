import React, { useEffect, useRef, useState } from "react";
import { Container } from "semantic-ui-react";
import * as S from "./page-sticky.styles";
import StickyComponent from "./StickyComponent/StickyComponent";
import "./page-sticky.css";

const PageWithSticky = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <Container>
      <div>PageWithSticky</div>

      <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <StickyComponent />
      </div>

      <div>
        <p>Overflowing text</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
          laoreet id donec ultrices tincidunt arcu. Risus ultricies tristique
          nulla aliquet enim tortor at auctor. Massa tincidunt nunc pulvinar
          sapien et ligula ullamcorper. Pretium aenean pharetra magna ac
          placerat vestibulum lectus. Turpis nunc eget lorem dolor sed viverra.
          Suspendisse interdum consectetur libero id. Ornare suspendisse sed
          nisi lacus sed viverra. Arcu ac tortor dignissim convallis aenean et
          tortor. Ornare massa eget egestas purus viverra accumsan in nisl nisi.
          Lacus sed turpis tincidunt id aliquet. Justo donec enim diam vulputate
          ut pharetra sit amet. Nulla facilisi nullam vehicula ipsum a arcu. A
          condimentum vitae sapien pellentesque habitant morbi tristique.
        </p>

        <p>
          Cursus sit amet dictum sit amet justo donec. Proin sed libero enim sed
          faucibus turpis. Orci a scelerisque purus semper eget duis. Aliquet
          nec ullamcorper sit amet risus. Consectetur purus ut faucibus pulvinar
          elementum integer enim. Neque sodales ut etiam sit. Bibendum neque
          egestas congue quisque egestas diam. Risus sed vulputate odio ut enim
          blandit volutpat maecenas volutpat. Sit amet luctus venenatis lectus
          magna fringilla urna porttitor. Nisi porta lorem mollis aliquam.
          Volutpat blandit aliquam etiam erat. Amet massa vitae tortor
          condimentum lacinia quis vel eros donec. Tortor dignissim convallis
          aenean et tortor at risus.
        </p>
        <S.StickyStyle>Sticky with only css code</S.StickyStyle>
        <p>
          Scelerisque eleifend donec pretium vulputate sapien. Eu non diam
          phasellus vestibulum. Imperdiet sed euismod nisi porta lorem mollis
          aliquam ut. Faucibus in ornare quam viverra orci sagittis eu. Iaculis
          eu non diam phasellus vestibulum lorem sed risus ultricies. Morbi
          tristique senectus et netus et malesuada fames. Lacus viverra vitae
          congue eu consequat ac felis donec. Odio morbi quis commodo odio
          aenean sed. Vel risus commodo viverra maecenas accumsan lacus vel.
          Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Suspendisse
          potenti nullam ac tortor vitae purus faucibus ornare. Faucibus vitae
          aliquet nec ullamcorper sit amet risus nullam. Eu non diam phasellus
          vestibulum lorem sed risus ultricies tristique. Duis tristique
          sollicitudin nibh sit amet commodo nulla facilisi nullam. Malesuada
          fames ac turpis egestas integer eget aliquet nibh.
        </p>

        <p>
          Arcu bibendum at varius vel pharetra vel turpis nunc. Consectetur
          adipiscing elit ut aliquam purus sit amet. Risus commodo viverra
          maecenas accumsan lacus. Commodo elit at imperdiet dui accumsan sit
          amet. Sit amet consectetur adipiscing elit ut aliquam. Amet purus
          gravida quis blandit turpis cursus. Aliquam malesuada bibendum arcu
          vitae elementum. Rhoncus dolor purus non enim. Feugiat nibh sed
          pulvinar proin gravida hendrerit. Aliquam eleifend mi in nulla. Diam
          vulputate ut pharetra sit amet aliquam id. Sagittis vitae et leo duis.
          Quam quisque id diam vel quam elementum pulvinar etiam. Justo laoreet
          sit amet cursus sit amet dictum sit.
        </p>

        <p>
          Risus viverra adipiscing at in tellus integer feugiat scelerisque
          varius. Massa ultricies mi quis hendrerit dolor magna. Iaculis nunc
          sed augue lacus viverra vitae congue eu. Neque sodales ut etiam sit
          amet nisl purus in. Pulvinar proin gravida hendrerit lectus. Est
          pellentesque elit ullamcorper dignissim cras. Mauris rhoncus aenean
          vel elit scelerisque mauris pellentesque pulvinar. Consectetur
          adipiscing elit duis tristique. A pellentesque sit amet porttitor eget
          dolor. At augue eget arcu dictum varius duis at consectetur lorem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
          laoreet id donec ultrices tincidunt arcu. Risus ultricies tristique
          nulla aliquet enim tortor at auctor. Massa tincidunt nunc pulvinar
          sapien et ligula ullamcorper. Pretium aenean pharetra magna ac
          placerat vestibulum lectus. Turpis nunc eget lorem dolor sed viverra.
          Suspendisse interdum consectetur libero id. Ornare suspendisse sed
          nisi lacus sed viverra. Arcu ac tortor dignissim convallis aenean et
          tortor. Ornare massa eget egestas purus viverra accumsan in nisl nisi.
          Lacus sed turpis tincidunt id aliquet. Justo donec enim diam vulputate
          ut pharetra sit amet. Nulla facilisi nullam vehicula ipsum a arcu. A
          condimentum vitae sapien pellentesque habitant morbi tristique.
        </p>

        <p>
          Cursus sit amet dictum sit amet justo donec. Proin sed libero enim sed
          faucibus turpis. Orci a scelerisque purus semper eget duis. Aliquet
          nec ullamcorper sit amet risus. Consectetur purus ut faucibus pulvinar
          elementum integer enim. Neque sodales ut etiam sit. Bibendum neque
          egestas congue quisque egestas diam. Risus sed vulputate odio ut enim
          blandit volutpat maecenas volutpat. Sit amet luctus venenatis lectus
          magna fringilla urna porttitor. Nisi porta lorem mollis aliquam.
          Volutpat blandit aliquam etiam erat. Amet massa vitae tortor
          condimentum lacinia quis vel eros donec. Tortor dignissim convallis
          aenean et tortor at risus.
        </p>

        <p>
          Scelerisque eleifend donec pretium vulputate sapien. Eu non diam
          phasellus vestibulum. Imperdiet sed euismod nisi porta lorem mollis
          aliquam ut. Faucibus in ornare quam viverra orci sagittis eu. Iaculis
          eu non diam phasellus vestibulum lorem sed risus ultricies. Morbi
          tristique senectus et netus et malesuada fames. Lacus viverra vitae
          congue eu consequat ac felis donec. Odio morbi quis commodo odio
          aenean sed. Vel risus commodo viverra maecenas accumsan lacus vel.
          Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Suspendisse
          potenti nullam ac tortor vitae purus faucibus ornare. Faucibus vitae
          aliquet nec ullamcorper sit amet risus nullam. Eu non diam phasellus
          vestibulum lorem sed risus ultricies tristique. Duis tristique
          sollicitudin nibh sit amet commodo nulla facilisi nullam. Malesuada
          fames ac turpis egestas integer eget aliquet nibh.
        </p>

        <p>
          Arcu bibendum at varius vel pharetra vel turpis nunc. Consectetur
          adipiscing elit ut aliquam purus sit amet. Risus commodo viverra
          maecenas accumsan lacus. Commodo elit at imperdiet dui accumsan sit
          amet. Sit amet consectetur adipiscing elit ut aliquam. Amet purus
          gravida quis blandit turpis cursus. Aliquam malesuada bibendum arcu
          vitae elementum. Rhoncus dolor purus non enim. Feugiat nibh sed
          pulvinar proin gravida hendrerit. Aliquam eleifend mi in nulla. Diam
          vulputate ut pharetra sit amet aliquam id. Sagittis vitae et leo duis.
          Quam quisque id diam vel quam elementum pulvinar etiam. Justo laoreet
          sit amet cursus sit amet dictum sit.
        </p>

        <p>
          Risus viverra adipiscing at in tellus integer feugiat scelerisque
          varius. Massa ultricies mi quis hendrerit dolor magna. Iaculis nunc
          sed augue lacus viverra vitae congue eu. Neque sodales ut etiam sit
          amet nisl purus in. Pulvinar proin gravida hendrerit lectus. Est
          pellentesque elit ullamcorper dignissim cras. Mauris rhoncus aenean
          vel elit scelerisque mauris pellentesque pulvinar. Consectetur
          adipiscing elit duis tristique. A pellentesque sit amet porttitor eget
          dolor. At augue eget arcu dictum varius duis at consectetur lorem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
          laoreet id donec ultrices tincidunt arcu. Risus ultricies tristique
          nulla aliquet enim tortor at auctor. Massa tincidunt nunc pulvinar
          sapien et ligula ullamcorper. Pretium aenean pharetra magna ac
          placerat vestibulum lectus. Turpis nunc eget lorem dolor sed viverra.
          Suspendisse interdum consectetur libero id. Ornare suspendisse sed
          nisi lacus sed viverra. Arcu ac tortor dignissim convallis aenean et
          tortor. Ornare massa eget egestas purus viverra accumsan in nisl nisi.
          Lacus sed turpis tincidunt id aliquet. Justo donec enim diam vulputate
          ut pharetra sit amet. Nulla facilisi nullam vehicula ipsum a arcu. A
          condimentum vitae sapien pellentesque habitant morbi tristique.
        </p>

        <p>
          Cursus sit amet dictum sit amet justo donec. Proin sed libero enim sed
          faucibus turpis. Orci a scelerisque purus semper eget duis. Aliquet
          nec ullamcorper sit amet risus. Consectetur purus ut faucibus pulvinar
          elementum integer enim. Neque sodales ut etiam sit. Bibendum neque
          egestas congue quisque egestas diam. Risus sed vulputate odio ut enim
          blandit volutpat maecenas volutpat. Sit amet luctus venenatis lectus
          magna fringilla urna porttitor. Nisi porta lorem mollis aliquam.
          Volutpat blandit aliquam etiam erat. Amet massa vitae tortor
          condimentum lacinia quis vel eros donec. Tortor dignissim convallis
          aenean et tortor at risus.
        </p>

        <p>
          Scelerisque eleifend donec pretium vulputate sapien. Eu non diam
          phasellus vestibulum. Imperdiet sed euismod nisi porta lorem mollis
          aliquam ut. Faucibus in ornare quam viverra orci sagittis eu. Iaculis
          eu non diam phasellus vestibulum lorem sed risus ultricies. Morbi
          tristique senectus et netus et malesuada fames. Lacus viverra vitae
          congue eu consequat ac felis donec. Odio morbi quis commodo odio
          aenean sed. Vel risus commodo viverra maecenas accumsan lacus vel.
          Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Suspendisse
          potenti nullam ac tortor vitae purus faucibus ornare. Faucibus vitae
          aliquet nec ullamcorper sit amet risus nullam. Eu non diam phasellus
          vestibulum lorem sed risus ultricies tristique. Duis tristique
          sollicitudin nibh sit amet commodo nulla facilisi nullam. Malesuada
          fames ac turpis egestas integer eget aliquet nibh.
        </p>

        <p>
          Arcu bibendum at varius vel pharetra vel turpis nunc. Consectetur
          adipiscing elit ut aliquam purus sit amet. Risus commodo viverra
          maecenas accumsan lacus. Commodo elit at imperdiet dui accumsan sit
          amet. Sit amet consectetur adipiscing elit ut aliquam. Amet purus
          gravida quis blandit turpis cursus. Aliquam malesuada bibendum arcu
          vitae elementum. Rhoncus dolor purus non enim. Feugiat nibh sed
          pulvinar proin gravida hendrerit. Aliquam eleifend mi in nulla. Diam
          vulputate ut pharetra sit amet aliquam id. Sagittis vitae et leo duis.
          Quam quisque id diam vel quam elementum pulvinar etiam. Justo laoreet
          sit amet cursus sit amet dictum sit.
        </p>

        <p>
          Risus viverra adipiscing at in tellus integer feugiat scelerisque
          varius. Massa ultricies mi quis hendrerit dolor magna. Iaculis nunc
          sed augue lacus viverra vitae congue eu. Neque sodales ut etiam sit
          amet nisl purus in. Pulvinar proin gravida hendrerit lectus. Est
          pellentesque elit ullamcorper dignissim cras. Mauris rhoncus aenean
          vel elit scelerisque mauris pellentesque pulvinar. Consectetur
          adipiscing elit duis tristique. A pellentesque sit amet porttitor eget
          dolor. At augue eget arcu dictum varius duis at consectetur lorem.
        </p>
      </div>
    </Container>
  );
};

export default PageWithSticky;
