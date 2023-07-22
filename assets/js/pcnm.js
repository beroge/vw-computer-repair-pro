// These are custom js scripts for pc-nm.com website

// Function to handle mouseover event
(function(jQuery) {
    jQuery(document).ready(function() {
      jQuery('.trigger').hover(handleMouseOver, handleMouseOut);
  
      const originalContent = jQuery('.target').html();
      const targetContent = {
        1: '<h3>Performance Computers, LLC is a leading computer repair business dedicated to providing exceptional services to individuals and businesses alike. With a team of highly skilled technicians, we offer reliable and efficient solutions to address all your computer-related issues.</h3>',
        2: '<h3>At Performance Computers, LLC, we specialize in providing efficient and reliable tablet and smartphone repair services. Our skilled technicians are equipped to handle a wide range of issues, ensuring that your devices are swiftly restored to their optimal performance. Trust us to deliver exceptional customer service and top-notch repairs, keeping your tablets and smartphones running smoothly.</h3>',
        3: '<h3>Performance Computers, LLC takes pride in offering expert laptop repair services. As a trusted name in the industry, we understand the value of your device and the urgency of getting it back in shape. Our dedicated team of technicians is well-versed in diagnosing and resolving various laptop issues, providing quick and effective solutions to keep your device running at its best. Experience reliable and professional laptop repairs tailored to meet your needs with us.</h3>',
        4: '<h4>At Performance Computers, LLC, we excel in providing top-tier gaming console repair services to keep your gaming experience uninterrupted. Our skilled technicians are passionate about gaming and well-versed in fixing a wide range of console issues. Whether it\'s hardware glitches or connectivity problems, we have the expertise to tackle them all. Trust us to revive your gaming console efficiently, so you can immerse yourself back into the gaming world with confidence. Your satisfaction is our priority, and we are committed to delivering exceptional gaming console repair solutions at Performance Computers, LLC.</h4>',
        5: '<h4>Our ultrasonic cleaning solution is here to save the day</h4><hr><h4>With the power of high frequency sound waves, our ultrasonic cleaner can deep clean even the toughest to reach crevices in your electronics. Whether it\'s coffee stains on your laptop, sticky residue on your phone, or greasy fingerprints on your tablet, our cleaner will effectively remove all impurities</h4><hr><h4>Not only is our solution quick and effective, but it\'s also safe and gentle on all types of electronics. Our ultrasonic cleaner is non-abrasive and non-toxic, ensuring that your devices are protected while they get a deep clean</h4>',
        6: '<h2>We repair:</h2><ul><li>Audio Jack Replacements or Repairs</li><li>Battery Replacements or Repairs (if the battery is soldered in)</li><li>Camera Replacements or Repairs</li><li>Charging Port Replacements or Repair</li><li>Home Button Replacements or Repair</li><li>Microphone Replacements or Repairs</li><li>Power Button Replacements or Repairs</li><li>Speaker Replacements or Repairs</li><li>Volume Button Replacements or Repairs</li></ul>'
      };
      
      let isFadingOut = false;
  
      function handleMouseOver() {
        if (isFadingOut) return;
        const triggerNumber = jQuery(this).data('trigger');
        const target = jQuery('.target');
        target.css('opacity', 0);
        isFadingOut = true;
  
        setTimeout(() => {
          target.html(targetContent[triggerNumber]);
          target.css('opacity', 1);
          isFadingOut = false;
        }, 500);
        
      }
      
  
      function handleMouseOut() {
        if (isFadingOut) return;
        const target = jQuery('.target');
        target.css('opacity', 0);
  
        setTimeout(() => {
          target.html(originalContent);
          target.css('opacity', 1);
        }, 500);
      }
    });
  })(jQuery);
  