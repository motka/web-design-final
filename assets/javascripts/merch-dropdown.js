    $(document).ready(function(){
        $('#purpose').on('change', function() {
        
          if ( this.value == '0')
          {
            $("#tops").show();
            $("#hats").show();
          }
          else if ( this.value == '1')
          {
            $("#tops").hide();
            $("#hats").show();
          }
          else if ( this.value == '2')
          {
            $("#hats").hide();
            $("#tops").show();
          }
         
        });
    });
