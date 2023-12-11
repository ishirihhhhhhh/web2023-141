function keisan(){ //keisanという関数を実行
  var a, b,d;
  a = document.getElementById("shincho").value;
  b	= document.getElementById("taijuu").value; 
  c = b/( (a/100)*(a/100) ); //BMIの計算結果をcに代入
　alert('あなたのBMIは' + c + 'です' );}
