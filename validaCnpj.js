<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>


<script>
    $(document).ready(function(){
      //Função no blur do campo CNPJ
      $('#CNPJ').on('blur', function(e) {
        
        //definição da variável CNPJ com o que foi digitado no campo
        var cnpj = $(this).val();
        //Validação se o campo tem algo preenchido
        if(cnpj.length != 0) {
          //Validação se o campo possui 14 digitos (modelo padrão de CNPJ sem pontuação)
          if(cnpj.length == 14) {
            //É feita uma requisição via AJAX na API da receita federal com o CNPJ informado
            $.ajax({
              url:'https://www.receitaws.com.br/v1/cnpj/' + cnpj,
              method:'GET',
              dataType: 'jsonp', 
              complete: function(xhr){
                  
                  //Definindo array retornada na requisição
                  response = xhr.responseJSON;
            
                  if(response.status == 'OK') {}else{
                    //Caso status do CNPJ for diferente de OK, o campo é limpado e é exibido um alert
                    $('#form-field-field_b2a657b').val("");
                    alert('CNPJ não encontrado na receita');
                  }
            }
          });
        }else{
          //Caso o CNPJ digitado não possua 14 dígitos
          $('#form-field-field_b2a657b').val("");
          alert('CNPJ inválido');
        }
      }
    });
  });
</script>
