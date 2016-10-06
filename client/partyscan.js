// js/todoList.js
'use strict';

var url_server = 'http://localhost:8080';



/**
 * Déclaration de l'application demoApp
 */
var partyScanJSapp = angular.module('partyScanJSapp', [
    // Dépendances du "module"
    'partyScanJS'
]);

/**
 * Déclaration du module todoList
 */
var partyScanJS = angular.module('partyScanJS',[]);

var sounds = [];
sounds['bip'] = new Audio('/audio/bip.mp3');
sounds['bop'] = new Audio('/audio/alarme1.mp3');


/**
 * Contrôleur de l'application "Todo List" décrite dans le chapitre "La logique d'AngularJS".
 */
partyScanJS.controller('partyScanJSCtrl', ['$scope', '$interval', '$http',
    function ($scope,$interval,$http  ) {

        // Pour manipuler plus simplement les todos au sein du contrôleur
        // On initialise les todos avec un tableau vide : []
        var liste = $scope.liste = listingSrc;
        
        //console.log( liste );
        
        $scope.id = '0000';
        $scope.tick = false;
        $scope.payeValue = 0;
        $scope.modified = false;
        
        $scope.totaux = { total : 0, paid: 0};
        
        for( var i=0;i<liste.length;i++)
		{
			$scope.totaux.total += liste[i].total;
			if( liste[i].paiement )
				$scope.totaux.paid += liste[i].paiement.value;
		}
        
        $scope.findTicket = function( val )
        {
			val = document.getElementById('id').value;
			
			console.log( "val : "+val );
			//$scope.id = id;
			for( var i=0; i< $scope.liste.length; i++ )
			{
				if( $scope.liste[ i ]._id == val )
				{
					$scope.selectTicket( $scope.liste[ i ] );
					
				}
			}
			
			
		}
        
        
        $scope.selectTicket = function( ticket )
        {
			//console.log( index );
			$scope.tick = ticket; //$scope.liste[ index ];
			console.log( $scope.tick );
			$scope.payeValue = $scope.tick.total_amount;
			$scope.tick.clicked=true;
			$scope.$apply();
		}
        
        
        
        $scope.validePaye = function( mode )
        {
			if( !$scope.tick ) 
				return; // si aucun ticket sélectionné, on kille direct
				
			$scope.tick.paiement = { 'mode':mode
									,'value':$scope.payeValue };
			$scope.modified = true;
			$scope.totaux.paid += parseFloat($scope.payeValue);
		}
        
        $scope.save = function()
        {
			$http({
				method: 'POST',
				url: '?',
				data: JSON.stringify( $scope.liste ),
				headers: {'Content-Type': 'application/json'}
			});
		}
        
     
        
        $scope.check_timer = $interval( function(){
												if( $scope.modified  )
												{
													$scope.save();
													$scope.modified = false;
												}
											}
									 ,10000 );
        
        
        
      
        
    }
]);


function receiveTicketId( id )
{
	//angular.element( document.getElementById('body')).scope().findTicket( id );
	document.getElementById( 'id' ).value = id;
	console.log( 'receiveTicketId :' + id );
	angular.element( document.getElementById('body')).scope().findTicket( );
	
}
