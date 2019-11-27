console.log('JS');
$(document).ready(()=>{
  console.log('JQ');
  clickHandlers();
  updatePage();
});

stage = 0; //Which step of the code we are on;

function clickHandlers () {
  $('#btn-next').on('click',next);
  $('#btn-back').on('click',back);
  $('#navbar').on('click','.icon',jump);
}

function jump () {
  let index = $(this).data('index');
  stage = index;
  updatePage();
  console.log('JUMP');
}

function next () {
  if (stage<data.length-1) {
    stage++;
    updatePage();
  }
  if (stage===data.length-1) {
    $(this).attr('disabled',true);
  }
  if (stage>0) {
    $('#btn-back').attr('disabled',false);
  }
}

function back () {
  if (stage>0) {
    stage--;
    updatePage();
  }
  if (stage===0) {
    $(this).attr('disabled',true);
  }
  if (stage<data.length-1) {
    $('#btn-next').attr('disabled',false);
  }
}

function updatePage () {
  $('#function-title').html(data[stage].title);
  if (stage!=data.length-1) {
    $('#example-box').html(`
      <p class="example-title">Example:</p>
      ${data[stage].example}`);
  } else {
    $('#example-box').empty();
  }
  $('#sec-description').html(data[stage].description);
  $('#question').html(data[stage].question);

  if (stage>0 && stage!=data.length-1) {
    $('#previous-example').html(`
      <p class="example-title">Previous:</p>
      ${data[stage-1].example}`);
  } else {
    $('#previous-example').empty();
  }

  updateNavbar();
}

const icons = ['far fa-smile','fas fa-mask','fas fa-long-arrow-alt-right','far fa-laugh-wink','fas fa-question'];
function updateNavbar () {
  $('#navbar').empty();
  let ul = $(`<ul class="icon-list"></ul>`);

  for (let i=0; i<icons.length; i++) {
    let colorClass = '';
    if (stage===i) {colorClass='icon-current';} else {colorClass='icon-norm';}
    let item = $(`<li class='icon ${colorClass}'><i class="${icons[i]}"></i></li>`);
    item.data('index',i);
    ul.append(item);
  }
  $('#navbar').append(ul);
}

let numbers = [5,8,3,10,15,20,1,-5];
let newArray = numbers.filter((number)=>number > 5);
console.log( newArray );
