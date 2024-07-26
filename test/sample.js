module.exports = {
    'Google advanced search: nightwatch'(browser) {
      const languageDropDownOpenerSelector = '#lr_button';
      const languageDropdownValueSelector = '.goog-menuitem[value=lang_en]';
      const RegionDropDownOpenerSelector = '#cr_button';
      const RegionDropdownValueSelector = '.goog-menuitem[value=countryAF]';
      const LastUpdatedropdownselector="#as_qdr_button";
      const LastUpdateddropvalueselector=".goog-menuitem[value=d]";
      const Termsdropdown="#as_occt_button"
      const TermdropvalueDown=".goog-menuitem[value=url]"
      const FileTypeDRopdown="#as_filetype_button"
      const FileTypeValueSelector=".goog-menuitem[value=kml]"
      const UsageDropDown="#as_rights_button"
      const UsageValuedropdown=".goog-menuitem[value=fm]"
      browser
        .url('https://www.google.com/advanced_search')
        .setValue('input[id="CwYCWc"]','nightwatch')
        .setValue('input[name="as_oq"]', 'framework')
        .setValue('input[name="as_eq"]', 'nothing')
        .setValue('input[name="as_nlo"]', '0')
        .setValue('input[name="as_nhi"]', '20')
        .click(languageDropDownOpenerSelector)
        .click(languageDropdownValueSelector)
        .click(RegionDropDownOpenerSelector)
        .click(RegionDropdownValueSelector)
        .click(LastUpdatedropdownselector)
        .click( LastUpdateddropvalueselector)
        .setValue('input[name="as_sitesearch"]', 'website')
        .click(Termsdropdown)
        .click(TermdropvalueDown)
        .click(FileTypeDRopdown)
        .click(FileTypeValueSelector)
        .click(UsageDropDown)
        .click(UsageValuedropdown)
        // .click('input[type="submit"]')
        .saveScreenshot('tests_output/google1.png')    
        .end();
    }
  };
 